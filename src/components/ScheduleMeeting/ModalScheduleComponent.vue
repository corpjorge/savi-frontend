<script setup lang="ts">
import IconVideoCam from "@/components/icons/IconVideoCam.vue";
import CalendarComponent from "@/components/ScheduleMeeting/CalendarComponent.vue";
import TimeSelection from "@/components/ScheduleMeeting/TimeSelection.vue";
import { useSelectedDateStore } from "@/stores/selectedDate";
import { useModalCalendar } from "@/stores/modalCalendar";
import { useSelectedAdviser } from "@/stores/selectedAdviser";
import { createMeeting } from "@/api/createMeeting";

const selectedDate = useSelectedDateStore();
let modal = useModalCalendar();
let adviser = useSelectedAdviser();

const clickCreateMeeting = () => {
  let date = new Date(selectedDate.dateUTF8);
  let meetDate =
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1 < 10 ? "0" : "") +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    " " +
    selectedDate.hour +
    ":00" +
    ":00";

  createMeeting(meetDate, adviser.id).then(() => {
    modal.show = false;
    window.location.reload();
  });
};
</script>
<template>
  <div
    v-if="modal.show"
    class="relative z-10"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>

    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div
        class="flex items-end sm:items-center justify-center min-h-full p-2 text-center sm:p-0"
      >
        <div
          class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-2 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
              <div
                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
              >
                <IconVideoCam />
              </div>
              <div class="mt-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Agenda tu cita virtual
                </h3>
                <div class="mt-2">
                  <p class="mb-2 text-md text-gray-500">
                    Selecciona la fecha, la hora y el asesor disponible.
                  </p>
                  <hr class="border-b-2 border-gray-100" />
                  <CalendarComponent v-if="!selectedDate.dateSelect" />
                  <TimeSelection v-if="selectedDate.dateSelect" />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              :disabled="!adviser.id"
              @click="clickCreateMeeting"
              type="button"
              class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Agendar
            </button>
            <button
              @click="modal.show = false"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
