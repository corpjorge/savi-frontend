<script setup lang="ts">
import SCard from "@/components/SaviUI/S-Card.vue";
import VideoCamera from "@/components/icons/VideoCamera.vue";
import SCardLarge from "@/components/SaviUI/S-Card-Large.vue";
import ModalSchedule from "@/components/ScheduleMeeting/ModalScheduleComponent.vue";
import { useModalCalendar } from "@/stores/modalCalendar";
import { meeting } from "@/api/meeting";
import { onMounted, reactive } from "vue";

let meetingInProgress = reactive({
  meeting: null,
  hour: 0,
  date: "",
  isLoading: true,
});

onMounted(async () => {
  await meeting().then((res) => {
    if (res.data.id) {
      meetingInProgress.meeting = res.data;
      let date = new Date(res.data.date);
      meetingInProgress.hour = date.getHours();
      meetingInProgress.date = new Intl.DateTimeFormat("es-ES", {
        weekday: "long",
        month: "long",
        year: "numeric",
        day: "numeric",
      }).format(new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    }
  });
  meetingInProgress.isLoading = false;
});

let modal = useModalCalendar();
const showModalCalendar = () => {
  modal.show = true;
};

const goMeeting = () => {
  window.location.href = "/meeting";
};
</script>
<template>
  <img
    src="https://fedef.savinteractivo.com/img/header_1.png"
    class="hidden sm:block w-full"
    alt="header"
  />
  <template v-if="meetingInProgress.isLoading"></template>
  <template v-else>
    <div class="sm:ml-2" v-if="!meetingInProgress.meeting">
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
    <div v-else class="mt-8 sm:mr-10 sm:ml-2">
      <SCardLarge
        @click="goMeeting"
        :date="meetingInProgress.date"
        :hour="
          (meetingInProgress.hour % 12) +
          ':00 ' +
          (meetingInProgress.hour < 12 ? 'AM' : 'PM')
        "
        styling="secondary"
        text="Cita programada"
        subtext="Datos de tu cita virtual"
      >
      </SCardLarge>
    </div>
  </template>
  <ModalSchedule />
</template>
