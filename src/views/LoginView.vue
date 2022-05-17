<script setup lang="ts">
import LayoutDefault from "@/components/Layouts/LayoutDefault.vue";
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
              <input
                class="border border-gray-300 rounded-lg | w-full py-2 px-3 mt-2 | text-gray-700 | focus:outline-none focus:border-green-900"
                id="email"
                type="text"
                placeholder="micorreo@correo.com"
              />
            </div>
            <div class="mb-3">
              <label class="text-gray-600 text-sm font-semibold" for="password">
                Password
              </label>
              <input
                class="border border-gray-300 rounded-lg | w-full py-2 px-3 mt-2 | text-gray-700 | focus:outline-none focus:border-green-900"
                id="password"
                type="password"
                placeholder="******************"
              />
            </div>
            <div class="mb-3">
              <div>
                <input
                  class="accent-green-900 ml-2"
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label class="text-red-500 text-xs italic" for="vehicle1">
                  Términos y condiciones
                </label>
              </div>
            </div>
            <div class="flex items-center justify-between">
              <button
                class="w-full bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
            <div class="flex justify-between mt-2">
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                ¿No eres asociado?
              </a>
              <a
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
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
