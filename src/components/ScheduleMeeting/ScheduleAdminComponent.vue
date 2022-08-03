<script setup lang="ts">
import SCard from "@/components/SaviUI/S-Card.vue";
import VideoCamera from "@/components/icons/VideoCamera.vue";
import SCardLarge from "@/components/SaviUI/S-Card-Large.vue";
import ModalSchedule from "@/components/ScheduleMeeting/ModalScheduleComponent.vue";
import { useModalCalendar } from "@/stores/modalCalendar";
import { onMounted, reactive } from "vue";
import { meetingAdmin } from "@/api/meetingAdmin";

let meetingInProgress = reactive({
  meeting: null,
  hour: 0,
  date: "",
  isLoading: true,
});

const convertDate = (date: string | number | Date) => {
  console.log(date);

  let dateFormat = new Date(date);
  return new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  }).format(
    new Date(
      dateFormat.getFullYear(),
      dateFormat.getMonth(),
      dateFormat.getDate()
    )
  );
};

const convertHour = (date: string | number | Date) => {
  let dateFormat = new Date(date);
  return dateFormat.getHours();
};

onMounted(async () => {
  await meetingAdmin().then((res) => {
    meetingInProgress.meeting = res.data;
  });
  meetingInProgress.isLoading = false;
});

let modal = useModalCalendar();
const showModalCalendar = () => {
  modal.show = true;
};

const goMeeting = (meetingId: string) => {
  window.location.href = `/meeting/admin/?alias=${meetingId}`;
};
</script>
<template>
  <template v-if="meetingInProgress.isLoading"></template>
  <template v-else>
    <div class="sm:ml-2">
      <SCard
        @click="showModalCalendar"
        styling="warning"
        text="Nueva cita"
        subtext="Agende una nueva cita"
      >
        <template #icon>
          <VideoCamera :width="51" :height="54" stroke="white" fill="none" />
        </template>
      </SCard>
    </div>
    <div class="mt-8 sm:mr-10 sm:ml-2 overflow-y-scroll h-[30rem] sm:pr-5">
      <div
        class="mb-2"
        v-for="meeting in meetingInProgress.meeting"
        :key="meeting.id"
      >
        <SCardLarge
          @click="goMeeting(meeting.meeting)"
          :date="convertDate(meeting.date)"
          :hour="
            (convertHour(meeting.date) % 12) +
            ':00 ' +
            (convertHour(meeting.date) < 12 ? 'AM' : 'PM')
          "
          styling="primary"
          text="Cita programada"
          subtext="Datos de tu cita virtual"
        >
        </SCardLarge>
      </div>
    </div>
  </template>
  <ModalSchedule />
</template>
