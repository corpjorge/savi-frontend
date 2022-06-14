<script setup lang="ts">
let value = "";
defineProps<{
  disabled?: boolean;
  options: object[];
  placeholder?: string;
}>();
</script>
<template>
  <select
    class="border border-gray-700 text-sm font-light rounded p-2 w-80"
    v-model="value"
    :disabled="disabled"
  >
    <option class="text-blue-900" value="" v-if="placeholder" disabled selected>
      {{ placeholder }}
    </option>
    <option
      v-for="(option, index) in options"
      :value="option.value"
      :key="index"
    >
      {{ option.label }}
    </option>
  </select>
</template>
