<script setup lang="ts">
defineProps<{
  className?: string;
}>();
</script>
<template>
  <div class="flex items-center flex-col animate-pulse" :class="className">
    <i class="savi savi-logo | text-4xl text-green-900 lg:text-7xl"></i>
    <p class="text-xs font-light text-left pr-16 lg:pr-[11.5rem]">Cargando</p>
  </div>
</template>
