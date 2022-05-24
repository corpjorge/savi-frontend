<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const user = JSON.parse(localStorage.getItem("user") || "{}");

if (user.type <= 3) {
  router.push({ name: "Home-Admin" });
}
</script>
<template>
  <div class="m-5 sm:m-10 lg:m-32">
    <router-view />
  </div>
</template>
