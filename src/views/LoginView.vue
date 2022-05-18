<script setup lang="ts">
import LayoutDefault from "@/components/Layouts/LayoutDefault.vue";
import SButton from "@/components/SaviUI/S-Button.vue";
import SInput from "@/components/SaviUI/Forms/S-Input.vue";
import SCheckbox from "@/components/SaviUI/Forms/S-Checkbox.vue";
import { reactive } from "vue";

const state = reactive({
  email: "",
  password: "",
  TermsAndConditions: false,
});
</script>
<template>
  <LayoutDefault>
    <div class="flex sm:justify-center lg:justify-between">
      <div class="mt-12 md:mt-40 md:mr-10">
        <h1
          class="text-gray-800 text-4xl font-semibold text-center lg:text-left"
        >
          Agenda tu cita virtual
        </h1>
        <p class="mt-6 text-gray-500 font-medium">
          Ingresa tu correo electrónico y contraseña.
        </p>
        <div class="w-full">
          <form class="my-4">
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
            {{ state.email }}
            <div class="mb-3">
              <label class="text-gray-600 text-sm font-semibold" for="password">
                Password
              </label>
              <SInput
                name="password"
                id="password"
                type="password"
                placeholder="******************"
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
              />
            </div>
            <div class="flex justify-between mt-2">
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-green-700"
                href="#"
              >
                ¿No eres asociado?
              </a>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-green-700"
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
      <div class="hidden lg:block mt-52 xl:mt-20 w-1/2 xl:w-auto">
        <img src="/img/login.png" alt="login_img" />
      </div>
    </div>
  </LayoutDefault>
</template>
