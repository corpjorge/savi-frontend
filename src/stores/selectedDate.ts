import { defineStore } from "pinia";

export const useSelectedDateStore = defineStore("dateSelected", {
  state: () => ({
    dateSelect: false,
    dateUTF8: "",
    date: "",
    day: 0,
    month: 0,
    dayName: "",
    hour: 0,
  }),
});
