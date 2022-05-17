<template>
  <div class="m-5 sm:m-10 | lg:flex justify-center">
    <div class="text-center lg:text-left">
      <i class="savi savi-logo | p-0 text-4xl text-green-900"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LayoutDefault",
};
</script>

<style scoped></style>
