<script setup lang="ts">
import LayoutDefault from "@/components/Layouts/LayoutDefault.vue";
import SButton from "@/components/SaviUI/S-Button.vue";
import SInput from "@/components/SaviUI/Forms/S-Input.vue";
import SCheckbox from "@/components/SaviUI/Forms/S-Checkbox.vue";
import { reactive } from "vue";
import { authenticate } from "@/api/authenticate";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const state = reactive({
  email: "",
  password: "",
  TermsAndConditions: false,
  device_name: "lds",
});

const onSubmit = () => {
  authenticate(state).then(() => {
    router.push("/inicio");
  });
  console.log(state);
};
</script>
<template>
  <LayoutDefault>
    <div class="flex justify-center mt-10 lg:mt-12 mx-5 lg:m-0">
      <div class="">
        <h1
          class="text-gray-800 text-4xl font-semibold text-center lg:text-left"
        >
          Agenda tu cita virtual
        </h1>
        <p class="mt-6 text-gray-500 font-medium">
          Ingresa tu correo electrónico y contraseña.
        </p>
        <div class="w-full">
          <form @submit.prevent="onSubmit" class="my-4" method="post">
            <div class="mb-4">
              <label class="text-gray-600 text-sm font-semibold" for="email">
                Correo electrónico
              </label>
              <SInput
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu correo electrónico"
                v-model="state.email"
              />
            </div>
            <div class="mb-3">
              <label class="text-gray-600 text-sm font-semibold" for="password">
                Password
              </label>
              <SInput
                name="password"
                id="password"
                type="password"
                placeholder="******************"
                v-model="state.password"
              />
            </div>
            <div class="mb-3">
              <div>
                <SCheckbox
                  v-model="state.TermsAndConditions"
                  name="TermsAndConditions"
                  id="TermsAndConditions"
                />
                <label
                  class="text-red-500 text-xs italic"
                  for="TermsAndConditions"
                >
                  Términos y condiciones
                </label>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <SButton
                type="submit"
                styling="success"
                text="Ingresar"
                typeof="submit"
                :disabled="false"
              />
            </div>
            <div class="flex justify-between mt-2">
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-green-800"
                href="#"
              >
                Regístrate
              </a>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-green-800"
                href="#"
              >
                ¿Olvidas te tu contraseña?
              </a>
            </div>
          </form>
          <p class="text-center text-gray-500 text-xs">
            &copy;2022 SAVI. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </LayoutDefault>
</template>
