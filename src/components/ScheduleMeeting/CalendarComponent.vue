<script setup lang="ts">
import { calendar } from "@/utils/calendar";
import IconLeft from "@/components/icons/IconLeft.vue";
import IconRight from "@/components/icons/IconRight.vue";
import { onMounted, reactive, ref } from "vue";
import { useSelectedDateStore } from "@/stores/selectedDate";
import CalendarDays from "@/components/ScheduleMeeting/CalendarDays.vue";

const selectedDate = useSelectedDateStore();
const selectDay = ref(1);
const currentMonth = ref(new Date().getMonth() + 1);

let date = reactive({
  dates: [],
  currentDay: 1,
  year: 2020,
  currentMonth: "",
  selectedDay: 1,
  selectDay: 1,
  month: 0,
});

onMounted(() => {
  let response = calendar(selectDay.value);
  date.dates = response.dates;
  date.currentDay = response.currentDay;
  date.year = response.year;
  date.currentMonth = response.currentMonth;
  date.selectedDay = response.selectedDay;
  date.month = response.month;
});

const prevMonth = () => {
  let value = selectDay.value - 1;
  if (value < 1) {
    return;
  }
  selectDay.value = value;
  let response = calendar(value);
  date.dates = response.dates;
  date.currentDay = response.currentDay;
  date.year = response.year;
  date.currentMonth = response.currentMonth;
  date.selectedDay = response.selectedDay;
  date.month = response.month;
};

const nextMonth = () => {
  let value = selectDay.value + 1;
  if (value > 3) {
    return;
  }
  selectDay.value = value;
  let response = calendar(value);
  date.dates = response.dates;
  date.currentDay = response.currentDay;
  date.year = response.year;
  date.currentMonth = response.currentMonth;
  date.selectedDay = response.selectedDay;
  date.month = response.month;
};

const daySelect = (day: number) => {
  selectedDate.dateSelect = true;
  selectedDate.date = day + " " + date.currentMonth + ", " + date.year;
  // selectDay.value = day;
};
</script>
<template>
  <h1 class="my-3 ml-7 text-lg text-left capitalize flex justify-between">
    <div>{{ date.currentMonth }}, {{ date.year }}</div>
    <div class="flex">
      <div>
        <IconLeft
          class="cursor-pointer border border-gray-300 rounded-full p-1 mr-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700"
          :width="25"
          :height="25"
          fill="white"
          @click="prevMonth"
        />
      </div>
      <div>
        <IconRight
          class="cursor-pointer border border-gray-300 rounded-full p-1 mr-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700"
          :width="25"
          :height="25"
          fill="white"
          @click="nextMonth"
        />
      </div>
    </div>
  </h1>
  <div class="flex content-center text-center justify-center h-[19rem]">
    <CalendarDays
      :dates="date.dates"
      :currentMonth="currentMonth"
      :current-day="date.currentDay"
      :day-select="daySelect"
      :month="date.month"
    />
  </div>
</template>
