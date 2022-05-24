<script setup lang="ts">
import { defineProps } from "vue";

const style = {
  primary: "bg-green-900 text-white",
  secondary: "bg-gray-200 text-gray-800",
  danger: "bg-red-900 text-white",
  warning: "bg-orange-600 hover:bg-orange-500 text-white",
  success: "bg-green-900 text-white",
  info: "bg-blue-900 text-white",
  light: "bg-gray-200 text-gray-800",
  dark: "bg-gray-900 text-white",
};

const styleSecondary = {
  primary: "bg-green-900 text-white",
  secondary: "bg-gray-200 text-gray-800",
  danger: "bg-red-900 text-white",
  warning: "bg-orange-400 text-white",
  success: "bg-green-900  text-white",
  info: "bg-blue-900 text-white",
  light: "bg-gray-200 text-gray-800",
  dark: "bg-gray-900 text-white",
};

defineProps<{
  text: string;
  subtext: string;
  styling: string;
  onClick?: (event: MouseEvent) => void;
}>();
</script>
<template>
  <div
    :class="
      'w-60 p-8 rounded-3xl shadow hover:shadow-xl cursor-pointer ' +
      style[styling]
    "
  >
    <div :class="'rounded-3xl shadow p-4 w-20 ' + styleSecondary[styling]">
      <slot name="icon"></slot>
    </div>
    <h1 class="mt-12 text-lg font-medium">{{ text }}</h1>
    <p class="font-light text-sm">{{ subtext }}</p>
  </div>
</template>
