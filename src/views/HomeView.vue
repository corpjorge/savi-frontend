<script setup lang="ts">
import { ref } from "vue";
import LoaderComponents from "@/components/LoaderComponents.vue";

const isLoggedIn = ref(true);
</script>
<template>
  <LoaderComponents v-if="isLoggedIn" />
  <div v-else>Inicio f</div>
</template>
