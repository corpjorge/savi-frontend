<script setup lang="ts">
let value;
defineProps<{
  disabled?: boolean;
  options: object[];
  placeholder?: string;
}>();
</script>
<template>
  <select v-model="value" :disabled="disabled">
    <option v-if="placeholder" selected>{{ placeholder }}</option>
    <option
      class="text-blue-900"
      v-for="(option, index) in options"
      :value="option.value"
      :key="index"
    >
      {{ option.label }}
    </option>
  </select>
</template>
