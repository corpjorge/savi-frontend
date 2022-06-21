import http from "@/helpers/http";

export const createMeeting = async (date: string, admin_id: number | null) => {
  return await http.post("/meetings", { date, admin_id });
};
