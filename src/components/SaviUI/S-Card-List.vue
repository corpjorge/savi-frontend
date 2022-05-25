<script setup lang="ts">
import SButton from "@/components/SaviUI/S-Button.vue";

defineProps<{
  admin: string;
  service: string;
  state: string;
  score: number;
  onClick?: (event: MouseEvent) => void;
}>();
</script>
<template>
  <div class="p-8 mb-5 rounded-3xl shadow bg-gray-100 border border-gray-300">
    <h1 class="text-lg font-semibold text-gray-600">{{ service }}</h1>
    <h2 class="text-gray-800">{{ admin }}</h2>
    <div class="flex justify-between">
      <span class="mt-6 text-lg text-red-400 uppercase">{{ state }}</span>
      <div class="w-28">
        <SButton class="mt-4" styling="primary" text="Ver" />
      </div>
    </div>
  </div>
</template>
