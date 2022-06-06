import { defineStore } from "pinia";

export const useSelectedDateStore = defineStore("dateSelected", {
  state: () => ({ dateSelect: false, date: "", day: 0, month: 0 }),
});
