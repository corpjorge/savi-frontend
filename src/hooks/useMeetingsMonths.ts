import { meetingsMonths } from "@/api/meetingsMonths";
import { ref } from "vue";
import { useSessionStorage } from "@/hooks/useSessionStorage";

export const useMeetingsMonths = async (months: number) => {
  const meetings = ref([]);

  let sessionMeetingsMonths = sessionStorage.getItem("meetings-months");
  sessionMeetingsMonths = JSON.parse(sessionMeetingsMonths as string);

  if (!sessionMeetingsMonths) {
    await meetingsMonths(months).then((response) => {
      meetings.value = response.data.map(
        (data: { date: string | number | Date; admin_id: number }) => {
          return {
            month: new Date(data.date).getMonth() + 1,
            day: new Date(data.date).getDate(),
            hours: new Date(data.date).getHours(),
            advisers: data.admin_id,
          };
        }
      );
    });
    await useSessionStorage("meetings-months", meetings.value);
  }

  return sessionMeetingsMonths || meetings.value;
};
