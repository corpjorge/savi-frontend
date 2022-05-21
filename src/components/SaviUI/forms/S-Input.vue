<script setup lang="ts">
var value;

defineProps<{
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  name?: string;
  id?: string;
  onKeyUp?: (event: KeyboardEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onChange?: (event: Event) => void;
  onFocus?: (event: Event) => void;
  onBlur?: (event: Event) => void;
}>();
const emit = defineEmits([
  "onKeyUp",
  "onKeyDown",
  "onChange",
  "onFocus",
  "onBlur",
]);

const onKeyUp = (e: MouseEvent) => {
  emit("onKeyUp", e);
};

const onKeyDown = (e: MouseEvent) => {
  emit("onKeyDown", e);
};

const onChange = (e: MouseEvent) => {
  emit("onChange", e);
};

const onFocus = (e: MouseEvent) => {
  emit("onFocus", e);
};

const onBlur = (e: MouseEvent) => {
  emit("onBlur", e);
};
</script>
<template>
  <input
    :class="
      'border border-gray-300 rounded-lg | w-full py-2 px-3 mt-2 | text-gray-700 | focus:outline-none focus:border-green-900 ' +
      (invalid ? 'border-red-500' : '')
    "
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :required="required"
    :name="name"
    :id="id"
    :type="type"
    @change="onChange"
    @keydown="onKeyDown($event)"
    @keyup="onKeyUp($event)"
    @blur="onBlur"
    @focus="onFocus"
    v-model="value"
  />
</template>
