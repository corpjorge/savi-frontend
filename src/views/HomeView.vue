<script setup lang="ts">
import { ref } from "vue";
import LoaderComponents from "@/components/LoaderComponents.vue";
const isLoggedIn = ref(false);
</script>
<template>
  <LoaderComponents v-if="isLoggedIn" />
  <template v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>01</div>
      <div class="sm:border-l-2 sm:border-l-blue-500 mt-8 sm:m-0">
        <div class="sm:ml-20">02</div>
      </div>
    </div>
  </template>
</template>
