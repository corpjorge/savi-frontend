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
    viewBox="0 0 512 512"
    style="enable-background: new 0 0 512 512"
  >
    <circle style="fill: #93ffd0" cx="256" cy="256" r="256" />
    <path
      style="fill: #62b390"
      d="M283.026,510.581C402.823,498.01,498.01,402.823,510.581,283.026L398.222,170.667l-64.414,137.138
	l-220.031,33.528L283.026,510.581z"
    />
    <rect
      x="113.778"
      y="170.667"
      style="fill: #008d68"
      width="284.444"
      height="170.667"
    />
    <rect
      x="255.431"
      y="170.667"
      style="fill: #036a4e"
      width="142.791"
      height="170.667"
    />
    <polygon
      style="fill: #06ab80"
      points="398.222,170.667 256,256 113.778,170.667 "
    />
    <polygon
      style="fill: #02a179"
      points="398.222,170.667 255.426,170.667 255.426,255.655 256,256 "
    />
  </svg>
</template>
