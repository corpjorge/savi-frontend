<script setup lang="ts">
import { useSelectedDateStore } from "@/stores/selectedDate";
import { useAdviser } from "@/hooks/useAdviser";
import { onMounted, ref } from "vue";
import IconLeft from "@/components/icons/IconLeft.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import SSelect from "@/components/SaviUI/forms/S-Select.vue";

const hours = [
  { value: "8", label: "08:00 a.m. a 9:00 a.m." },
  { value: "9", label: "09:00 a.m. a 10:00 a.m." },
  { value: "10", label: "10:00 a.m. a 11:00 a.m." },
  { value: "11", label: "11:00 a.m. a 12:00 p.m." },
  { value: "12", label: "12:00 p.m. a 1:00 p.m." },
  { value: "13", label: "1:00 p.m. a 2:00 p.m." },
  { value: "14", label: "2:00 p.m. a 3:00 p.m." },
  { value: "15", label: "3:00 p.m. a 4:00 p.m." },
  { value: "16", label: "4:00 p.m. a 5:00 p.m. " },
  { value: "17", label: "5:00 p.m. a 6:00 p.m." },
];

const hour = ref(0);
const hoursAvailable = ref<object[]>([]);

const selectedDate = useSelectedDateStore();
const backToCalendar = () => {
  selectedDate.dateSelect = false;
};

const advisers = ref([{}]);
onMounted(async () => {
  advisers.value = await useAdviser();

  let sessionMeetingsMonths = JSON.parse(
    sessionStorage.getItem("meetings-months") as string
  );

  let meetingsNotAvailable = sessionMeetingsMonths.filter(
    (item: { month: number; day: number }) =>
      item.month === selectedDate.month && item.day === selectedDate.day
  );

  let hoursNotAvailable = [] as string[];
  hours.map((hours: { value: string; label: string }) => {
    meetingsNotAvailable.map((item: { hour: number }) => {
      item.hour === Number(hours.value)
        ? hoursNotAvailable.push(hours.value)
        : null;
    });
  });

  hours.map((hours: { value: string; label: string }) => {
    !(
      hoursNotAvailable.filter((item: string) => item === hours.value).length >=
      advisers.value.length
    )
      ? hoursAvailable.value.push({
          value: hours.value,
          label: hours.label,
        })
      : null;
  });
});
</script>
<template>
  <div class="flex align-middle my-2">
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
    <div class="mt-4" v-else>
      <SSelect
        v-model="hour"
        :options="hoursAvailable"
        placeholder="Hora de la cita"
      />
      <div v-for="(adviser, index) in advisers" :key="index">
        {{ adviser.name }}
      </div>
    </div>
  </div>
</template>
