<script setup lang="ts">
import SCard from "@/components/SaviUI/S-Card.vue";
import VideoCamera from "@/components/icons/VideoCamera.vue";
import SCardLarge from "@/components/SaviUI/S-Card-Large.vue";
import ModalSchedule from "@/components/ScheduleMeeting/ModalScheduleComponent.vue";
import { useModalCalendar } from "@/stores/modalCalendar";
let modal = useModalCalendar();

const showModalCalendar = () => {
  modal.show = true;
};
</script>
<template>
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
  <div class="mt-8 sm:mr-20">
    <SCardLarge
      styling="secondary"
      text="Cita programada"
      subtext="Datos de tu cita virtual"
    >
    </SCardLarge>
  </div>
  <ModalSchedule />
</template>
