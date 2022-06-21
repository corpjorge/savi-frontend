import { defineStore } from "pinia";

export const useModalCalendar = defineStore("modalCalendar", {
  state: () => ({ show: false }),
});
