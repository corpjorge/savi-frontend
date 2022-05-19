<script setup lang="ts">
const style = {
  primary: "bg-green-900 hover:bg-green-800 text-white",
  secondary: "bg-gray-200 hover:bg-gray-100 text-gray-800",
  danger: "bg-red-900 hover:bg-red-700 text-white",
  warning: "bg-orange-900 hover:bg-orange-700 text-white",
  success: "bg-green-900 hover:bg-green-800 text-white",
  info: "bg-blue-900 hover:bg-blue-700 text-white",
  light: "bg-gray-200 hover:bg-gray-100 text-gray-800",
  dark: "bg-gray-900 hover:bg-gray-700 text-white",
};

defineProps<{
  text: string;
  type?: string;
  styling: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (event: MouseEvent) => void;
}>();
</script>
<template>
  <button
    class="w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline disabled:bg-opacity-50 loading:-opacity-50"
    :type="type"
    :class="style[styling]"
    @click="onClick"
    :disabled="disabled"
  >
    {{ text }}
  </button>
</template>
