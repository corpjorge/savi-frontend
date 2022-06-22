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
  text: string;
  subtext: string;
  styling: string;
  onClick?: (event: MouseEvent) => void;
  hour: string;
  date: string;
}>();
</script>
<template>
  <div
    @click="onClick"
    :class="
      ' p-8 rounded-3xl shadow hover:shadow-xl cursor-pointer ' + style[styling]
    "
  >
    <h1 class="text-lg font-medium">{{ text }}</h1>
    <p class="font-light text-sm">{{ subtext }}</p>
    <div class="">
      <h1 class="mt-10 sm:mt-0 text-4xl sm:text-5xl text-right">{{ hour }}</h1>
    </div>
    <h2 class="sm:mt-1 sm:text-xl text-gray-100 text-right">
      {{ date }}
    </h2>
  </div>
</template>
