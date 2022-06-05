<script setup lang="ts">
import { onMounted, ref } from "vue";
import LoaderComponent from "@/components/LoaderComponent.vue";
import { useMeetingsMonths } from "@/hooks/useMeetingsMonths";

const meetings = ref<any>();

onMounted(async () => {
  meetings.value = await useMeetingsMonths(3);
});

defineProps<{
  dates: object;
  currentMonth: number;
  currentDay: number;
  month: number;
  daySelect: (day: number) => void;
}>();
</script>
<template>
  <div v-if="!meetings">
    <LoaderComponent class-name="my-28" />
  </div>
  <template v-else>
    <div v-for="(week, index) in dates" :key="index" class="text-center">
      <div class="text-sm text-gray-600 mb-2">{{ index }}</div>
      <div
        v-for="day in week"
        :key="day"
        :class="
          'text-xl font-medium border rounded-lg p-1 sm:p-2 mb-2 ml-2 ' +
          (currentDay === day && Number(month) === currentMonth
            ? 'text-blue-500 border-blue-500 cursor-pointer'
            : 'text-gray-600') +
          (currentDay > day && Number(month) === currentMonth ||
           meetings.filter((date: any) => { return date.month === month && date.day === day }).length >= 10 ||
           index === 'DO' ||
           new Date().getHours() >= 17
            ? ' text-gray-400 cursor-no-drop'
            : ' cursor-pointer hover:border-blue-500') +
          (day === 0 ? ' border-none mb-[2.35rem]' : '')
        "
        @click="
          (currentDay > day && Number(month) === currentMonth) ||
          meetings.filter((date: any) => {
            return date.month === month && date.day === day;
          }).length >= 10 ||
          index === 'DO' ||
          new Date().getHours() >= 17
            ? ''
            : daySelect(day)
        "
      >
        {{ day !== 0 ? day : "" }}
      </div>
    </div>
  </template>
</template>
