<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const user = JSON.parse(localStorage.getItem("user") || "{}");

console.log(user);
if (user.type <= 3) {
  router.push({ name: "Home-Admin" });
}
</script>
<template>
  <router-view />
</template>
