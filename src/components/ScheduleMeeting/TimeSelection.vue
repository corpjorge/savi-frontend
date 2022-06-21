<script setup lang="ts">
import { useSelectedDateStore } from "@/stores/selectedDate";
import { useSelectedAdviser } from "@/stores/selectedAdviser";
import { useAdviser } from "@/hooks/useAdviser";
import { onMounted, ref } from "vue";
import IconLeft from "@/components/icons/IconLeft.vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import SSelect from "@/components/SaviUI/forms/S-Select.vue";
import {
  validateHoursAvailable,
  numberOfAdvisers,
} from "@/utils/validateHours";

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
const adviserStore = useSelectedAdviser();

const backToCalendar = () => {
  adviserStore.id = null;
  selectedDate.dateSelect = false;
};

const advisers = ref<any>([]);
const meetingsNotAvailable = ref([]);
onMounted(async () => {
  advisers.value = await useAdviser();

  let sessionMeetingsMonths = JSON.parse(
    sessionStorage.getItem("meetings-months") as string
  );

  meetingsNotAvailable.value = sessionMeetingsMonths.filter(
    (item: { month: number; day: number }) =>
      item.month === selectedDate.month && item.day === selectedDate.day
  );

  let hoursNotAvailable = [] as string[];
  hours.map((hours: { value: string; label: string }) => {
    meetingsNotAvailable.value.map((item: { hour: number }) => {
      item.hour === Number(hours.value)
        ? hoursNotAvailable.push(hours.value)
        : null;
    });
  });

  hours.map((hours: { value: string; label: string }) => {
    if (!numberOfAdvisers(hours, hoursNotAvailable, advisers.value)) {
      if (validateHoursAvailable(hours, selectedDate)) {
        if (selectedDate.dayName == "SA" && Number(hours.value) >= 12) {
          return;
        }
        hoursAvailable.value.push({
          value: hours.value,
          label: hours.label,
        });
      }
    }
  });
});

const advisorsAvailable = ref<any>([]);
const selectHour = () => {
  let advisersNotAvailable = [] as string[];
  advisorsAvailable.value = [];
  adviserStore.id = null;
  meetingsNotAvailable.value.map((item: { hour: number; adviser: string }) => {
    item.hour == hour.value ? advisersNotAvailable.push(item.adviser) : null;
  });

  advisers.value.map(
    (adviser: { id: string; break_time: { start: number; end: number } }) => {
      if (!advisersNotAvailable.includes(adviser.id)) {
        if (
          adviser.break_time?.start == hour.value ||
          adviser.break_time?.end == hour.value
        ) {
          return;
        }
        advisorsAvailable.value.push(adviser);
      }
    }
  );

  selectedDate.hour = hour.value;
};

const selectAdvisorToMeeting = (id: number) => {
  adviserStore.id = id;
};
</script>
<template>
  <div class="flex align-middle my-2">
    <IconLeft
      class="cursor-pointer border border-gray-300 rounded-full p-1 ml-3 bg-blue-700 text-base font-medium text-white hover:bg-blue-600"
      :width="25"
      :height="25"
      fill="white"
      @click="backToCalendar"
    />
    <h1 class="ml-16 text-lg capitalize">
      {{ selectedDate.date }}
    </h1>
  </div>
  <div class="h-72">
    <div v-if="advisers.length < 1">
      <LoaderComponent class-name="my-28" />
    </div>
    <div class="mt-4" v-else>
      <SSelect
        @change="selectHour"
        v-model="hour"
        :options="hoursAvailable"
        placeholder="Hora de la cita"
      />
      <hr class="mt-4" />

      <div class="mt-4" v-if="hour && advisorsAvailable.length < 1">
        <h1 class="text-lg capitalize">
          No hay asesores disponibles para la hora seleccionada
        </h1>
      </div>

      <div class="overflow-y-scroll h-56 sm:pr-5">
        <div v-for="(adviser, index) in advisorsAvailable" :key="index">
          <div
            @click="selectAdvisorToMeeting(adviser.id)"
            :class="
              'flex items-center my-2 mx-1 p-2 cursor-pointer border rounded-2xl shadow' +
              (adviserStore.id === adviser.id
                ? ' bg-blue-500 text-white'
                : ' bg-white text-gray-800')
            "
          >
            <img
              class="rounded-full w-12 h-12 mr-2"
              :src="
                'https://ui-avatars.com/api/?color=f4f5f7&background=ff8d72&length=2&name=' +
                adviser.name
              "
              alt=""
            />
            <p>{{ adviser.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
