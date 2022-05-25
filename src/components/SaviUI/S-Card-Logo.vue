<script setup lang="ts">
const style = {
  primary: "bg-green-900 text-white",
  secondary: "bg-gradient-to-r from-blue-800 to-blue-700 text-white",
  danger: "bg-red-900 text-white",
  warning: "bg-orange-600 hover:bg-orange-500 text-white",
  success: "bg-green-900 text-white",
  info: "bg-blue-900 text-white",
  light: "bg-gray-200 text-gray-800",
  dark: "bg-gray-900 text-white",
};

defineProps<{
  urlImg: string;
  subtext: string;
  styling: string;
  onClick?: (event: MouseEvent) => void;
}>();
</script>
<template></template>
