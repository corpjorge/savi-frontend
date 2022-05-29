import { defineStore } from "pinia";

export const useSelectedDateStore = defineStore("dateSelected", {
  state: () => ({ dateSelect: false, date: "" }),
});
