<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const user = JSON.parse(localStorage.getItem("user") || "{}");

if (user.type >= 4) {
  router.push({ name: "Home" });
}
</script>
<template>
  <router-view />
</template>
