<script setup lang="ts">
let value = {
  checked: false,
};
defineProps<{
  checked?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  onChange?: (value: string) => void;
}>();
</script>
<template>
  <input
    class="accent-green-900 ml-2"
    type="checkbox"
    :id="id"
    :name="name"
    v-model="value"
    @change="onChange"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :checked="checked"
  />
</template>
