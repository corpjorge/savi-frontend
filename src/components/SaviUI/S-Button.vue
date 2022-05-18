<script setup lang="ts">
const style = {
  primary: "bg-green-900 hover:bg-green-700 text-white",
  secondary: "bg-gray-200 hover:bg-gray-100 text-gray-800",
  danger: "bg-red-900 hover:bg-red-700 text-white",
  warning: "bg-orange-900 hover:bg-orange-700 text-white",
  success: "bg-green-900 hover:bg-green-700 text-white",
  info: "bg-blue-900 hover:bg-blue-700 text-white",
  light: "bg-gray-200 hover:bg-gray-100 text-gray-800",
  dark: "bg-gray-900 hover:bg-gray-700 text-white",
};

defineProps<{
  text: string;
  type?: string;
  styling: string;
}>();

const emit = defineEmits(["click", "mouseenter", "mouseleave"]);

const onClick = (e: MouseEvent) => {
  emit("click", e);
};

const onMouseEnter = (e: MouseEvent) => {
  emit("mouseenter", e);
};

const onMouseLeave = (e: MouseEvent) => {
  emit("mouseleave", e);
};
</script>
<template>
  <button
    class="w-full font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
    :type="type"
    :class="style[styling]"
    @click="onClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    {{ text }}
  </button>
</template>
