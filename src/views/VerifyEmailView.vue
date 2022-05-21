<script setup lang="ts">
import IconEmail from "@/components/icons/IconEmail.vue";
import SButton from "@/components/SaviUI/S-Button.vue";
</script>
<template>
  <div class="mt-24 mx-5">
    <div class="justify-center text-center content-center items-center">
      <IconEmail class-name="inline " :width="160" :height="160" />
      <div class="flex justify-center text-center">
        <h1 class="mt-14 text-gray-800 text-4xl font-semibold text-center">
          Verifica tu correo electrónico
        </h1>
      </div>
      <div class="flex justify-center text-center">
        <p class="my-6 lg:w-[44rem] text-gray-600 text-center">
          Hemos enviado un correo electrónico a
          <span class="font-semibold">xxx</span> con un enlace para verificar tu
          cuenta. Recuerda también validar tu bandeja de correos no deseados o
          Spam
        </p>
      </div>

      <div class="flex justify-center items-center">
        <div class="w-80">
          <SButton
            type="submit"
            styling="success"
            text="Renviar mensaje"
            typeof="submit"
            :disabled="true"
          />
        </div>
      </div>

      <p class="mt-5 text-center text-gray-500 text-xs">
        &copy;2022 SAVI. All rights reserved.
      </p>
    </div>
  </div>
</template>
