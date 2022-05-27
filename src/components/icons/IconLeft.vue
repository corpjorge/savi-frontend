<script setup lang="ts">
defineProps<{
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  id?: string;
}>();
</script>
<template>
  <svg
    :class="className"
    :width="width"
    :height="height"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 59.414 59.414"
    style="enable-background: new 0 0 59.414 59.414"
    xml:space="preserve"
  >
    <polygon
      points="45.268,1.414 43.854,0 14.146,29.707 43.854,59.414 45.268,58 16.975,29.707 "
    />
  </svg>
</template>
