<script setup lang="ts">
import { useRouter } from "vue-router";
import { logout } from "@/api/logout";

const router = useRouter();
const user = JSON.parse(localStorage.getItem("user") || "{}");

if (user.type <= 3) {
  router.push({ name: "Home-Admin" });
}

const closeSession = () => {
  logout().then(() => {
    localStorage.clear();
    router.push({ name: "Login" });
  });
};
</script>
<template>
  <div
    class="mx-5 sm:mx-10 lg:mx-32 mt-6 sm:mt-10 lg:mt-8 | flex justify-between"
  >
    <div>
      <i class="savi savi-logo | text-4xl text-green-900 lg:text-4xl"></i>
      <h1 class="text-lg sm:text-sm font-semibold text-green-900">
        Bienvenido
      </h1>
    </div>
    <div class="mt-4">
      <label
        class="font-medium text-brown-700 border border-brown-700 px-5 py-2 rounded-lg cursor-pointer hover:bg-brown-700 hover:text-white"
        @click="closeSession"
      >
        Salir
      </label>
    </div>
  </div>
  <hr class="bg-blue-500 my-7 border-[1.5px]" />
  <div class="mx-5 sm:mx-10 lg:mx-32 mt-8 sm:my-5 lg:my-10">
    <router-view />
  </div>
</template>
