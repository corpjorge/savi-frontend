<script setup lang="ts">
defineProps<{
  name: string;
  urlImg: string;
  urlSite: string;
}>();
</script>
<template>
  <div
    class="w-80 rounded-3xl shadow-lg hover:shadow-xl cursor-pointer border border-gray-100 flex flex-col items-center"
  >
    <a :href="urlSite" target="_blank">
      <img :src="urlImg" class="h-full w-full" alt="logo" />
    </a>
  </div>
</template>
