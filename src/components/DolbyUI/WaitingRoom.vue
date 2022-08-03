<script setup lang="ts">
import LayoutDefault from "@/components/layouts/LayoutDefault.vue";
import PhoneComponent from "@/components/DolbyUI/PhoneComponent.vue";
import SButton from "@/components/SaviUI/S-Button.vue";
defineProps<{ onClick: (value: string) => void }>();
</script>
<template>
  <LayoutDefault>
    <PhoneComponent />
    <div class="hidden sm:flex justify-center mt-10 lg:mt-12 mx-5 lg:m-0">
      <div>
        <h1
          class="text-gray-800 text-4xl font-semibold text-center lg:text-left mb-4"
        >
          Bienvenido a tu cita virtual
        </h1>
        <p class="mb-4">
          Recuerda tener tu cámara y micrófono activas para realizar la sesión
        </p>
        <SButton
          type="button"
          styling="success"
          text="Ingresar"
          typeof="submit"
          :disabled="false"
          @click="onClick"
        />
      </div>
    </div>
  </LayoutDefault>
</template>
