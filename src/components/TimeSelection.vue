<script setup lang="ts">
import { useSelectedDateStore } from "@/stores/selectedDate";
import { useAdviser } from "@/hooks/useAdviser";
import { onMounted, ref } from "vue";
import IconLeft from "@/components/icons/IconLeft.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";

const selectedDate = useSelectedDateStore();
const backToCalendar = () => {
  selectedDate.dateSelect = false;
};

const advisers = ref([{}]);
onMounted(async () => {
  advisers.value = await useAdviser();
});
</script>
<template>
  <div class="flex align-middle mt-2">
    <IconLeft
      class="cursor-pointer border border-gray-300 rounded-full p-1 ml-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700"
      :width="25"
      :height="25"
      fill="white"
      @click="backToCalendar"
    />
    <h1 class="ml-16 text-lg capitalize">
      {{ selectedDate.date }}
    </h1>
  </div>
  <div>
    <div v-if="advisers.length === 1">
      <LoaderComponent class-name="my-28" />
    </div>
    <div v-else>
      <select v-model="value" :disabled="disabled">
        <option
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          v-for="(option, index) in advisers"
          :value="option.id"
          :key="index"
        >
          {{ option.name }}
        </option>
      </select>
      <div v-for="(adviser, index) in advisers" :key="index">
        {{ adviser.name }}
      </div>
    </div>
  </div>
</template>
