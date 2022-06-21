import { defineStore } from "pinia";

export const useSelectedAdviser = defineStore("adviser", {
  state: () => ({
    id: null as number | null,
  }),
});
