<script setup lang="ts">
import VoxeetSDK from "@voxeet/voxeet-web-sdk";
import { onMounted, ref } from "vue";
import { getToken } from "@/api/token";
import { meeting } from "@/api/meeting";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import WaitingRoom from "@/components/DolbyUI/WaitingRoom.vue";
import ChatComponent from "@/components/ChatComponent.vue";
import IconCam from "@/components/icons/IconCam.vue";
import IconMicrophone from "@/components/icons/IconMicrophone.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import {
  openSession,
  createAndJoinConference,
  handleConferenceFlow,
  leaveConference,
} from "@/hooks/useDolby";

const user = useLocalStorage("user", false);

let start = ref(true);
let meetingInfo = ref();
let alias = ref("");
let name = ref(user.name);
let token = ref();

const join = async () => {
  start.value = false;
  await createAndJoinConference(alias.value, name.value);
};

const leave = async () => {
  start.value = true;
  await leaveConference();
};

const main = async () => {
  token.value = await getToken();
  VoxeetSDK.initializeToken(token.value.token, () => {
    console.log("Token initialized");
  });
  await openSession(name.value);
  handleConferenceFlow();
};

onMounted(async () => {
  await meeting().then((res) => {
    if (res.data.id) {
      alias.value = res.data.meeting;
      meetingInfo.value = res.data;
    }
  });
  await main();
});
</script>
<template>
  <WaitingRoom v-if="start" :on-click="join" />
  <template v-else>
    <div class="ml-7 mt-3">
      <i class="savi savi-logo | text-2xl text-green-900"></i>
    </div>
    <div class="m-7 justify-between flex">
      <div>
        <div class="fixed m-8">
          <div id="self-view" class="w-40">
            <i class="display-1"></i>
          </div>
        </div>
        <div id="remote-view">
          <i class="display-1"></i>
        </div>
        <div class="flex justify-center -mt-12 z-50">
          <div
            class="bg-gray-100 bg-opacity-75 cursor-pointer z-50 rounded mr-2 p-2"
          >
            <IconCam />
          </div>
          <div
            class="bg-gray-100 bg-opacity-75 cursor-pointer z-50 rounded mr-2 p-2"
          >
            <IconMicrophone />
          </div>
          <div
            class="bg-red-200 bg-opacity-75 cursor-pointer z-50 rounded mr-2 p-2"
            id="btn-leave"
            @click="leave"
          >
            <IconPhone />
          </div>
        </div>
      </div>
      <div class="lg:w-1/4">
        <div
          class="mx-5 lg:mr-10 mb-3 p-3 rounded-lg bg-green-600 text-gray-100 shadow"
        >
          <div class="flex">
            <img
              class="rounded-full w-12 h-12 mr-2 shadow"
              :src="'https://ui-avatars.com/api/?color=f4f5f7&background=ff8d72&length=2&name=jorge'"
              alt=""
            />
            <div>
              <p>{{ meetingInfo.admin.name }}</p>
              <small>Asesor</small>
            </div>
          </div>
        </div>
        <ChatComponent />
      </div>
    </div>
  </template>
</template>

<style></style>
