<script setup lang="ts">
import { ref } from "vue";
import LoaderComponents from "@/components/LoaderComponent.vue";
import ScheduleComponent from "@/components/ScheduleComponent.vue";
import SCardLogo from "@/components/SaviUI/S-Card-Logo.vue";
import ApplicationListComponent from "@/components/ApplicationListComponent.vue";

const isLoggedIn = ref(false);
</script>
<template>
  <LoaderComponents v-if="isLoggedIn" />
  <template v-else>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <div class="flex flex-col items-center sm:hidden mb-5">
          <SCardLogo
            url-img="https://fedef.savinteractivo.com/storage/logo.png"
            url-site="https://fedef-co.com/"
            name="Fedef"
          />
        </div>
        <ScheduleComponent />
      </div>
      <hr class="sm:hidden bg-blue-500 my-7 border-[1.5px]" />
      <div class="sm:border-l-[1.5px] sm:border-l-blue-500 sm:m-0">
        <div class="sm:ml-10 lg:ml-20 sm:mr-2">
          <div class="hidden sm:flex flex-col items-center">
            <SCardLogo
              url-img="https://fedef.savinteractivo.com/storage/logo.png"
              url-site="https://fedef-co.com/"
              name="Fedef"
            />
          </div>
          <div class="mb-8 sm:my-8">
            <ApplicationListComponent />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>
