<script setup lang="ts">
import { onMounted, ref } from "vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import SButton from "@/components/SaviUI/S-Button.vue";
import { sendVerifyEmail } from "@/api/sendVerifyEmail";

const resend = ref(true);
const count = ref(30);

onMounted(async () => {
  sessionStorage.getItem("emailCheck") === "true" ||
  sessionStorage.getItem("emailCheck") == null
    ? await sendVerifyEmail()
    : null;

  setInterval(() => {
    if (count.value === 0) {
      return (resend.value = false);
    }
    count.value = count.value - 1;
  }, 1000);

  setTimeout(() => {
    resend.value = false;
  }, 30000);
});

const resendVerifyEmail = () => {
  sendVerifyEmail();
  count.value = 30;
  resend.value = true;
};
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
          Hemos enviado un correo electrónico con un enlace para verificar tu
          cuenta. Recuerda también validar tu bandeja de correos no deseados o
          Spam
        </p>
      </div>

      <p class="mb-1 text-sm text-gray-600 text-center">
        Podrás renviar el mensaje en <span class="font-bold">{{ count }}</span>
      </p>

      <div class="flex justify-center items-center">
        <div class="w-80">
          <SButton
            @click="resendVerifyEmail"
            type="submit"
            styling="success"
            text="Renviar mensaje"
            typeof="submit"
            :disabled="resend"
          />
        </div>
      </div>

      <p class="mt-5 text-center text-gray-500 text-xs">
        &copy;2022 SAVI. All rights reserved.
      </p>
    </div>
  </div>
</template>
