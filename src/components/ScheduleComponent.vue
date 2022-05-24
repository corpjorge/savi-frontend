<script setup lang="ts">
import SCard from "@/components/SaviUI/S-Card.vue";
import VideoCamera from "@/components/icons/VideoCamera.vue";
</script>
<template>
  <SCard styling="warning" text="Nueva cita" subtext="Agende una nueva cita">
    <template #icon>
      <VideoCamera width="51" height="54" stroke="white" fill="none" />
    </template>
  </SCard>
</template>
