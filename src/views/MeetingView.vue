<script setup lang="ts">
import VoxeetSDK from "@voxeet/voxeet-web-sdk";
import { onMounted, ref } from "vue";
import { getToken } from "@/api/token";
import {
  openSession,
  createAndJoinConference,
  handleConferenceFlow,
  shareVideo,
  leaveConference,
} from "@/hooks/useDolby";

const queryParams = new URLSearchParams(window.location.search);
let alias = ref(queryParams.get("alias") || "web-sdk-starter");
let name = ref(queryParams.get("name") || "developer");
let token = ref();

const join = async () => {
  await createAndJoinConference(alias.value, name.value);
};

const invite = () => {
  let url = `https://192.168.0.12:3000/meeting?token=${token.value.token}&alias=${alias.value}&name=guest`;
  console.log(url);
};

const leave = async () => {
  await leaveConference();
};

const main = async () => {
  token.value = await getToken();
  VoxeetSDK.initializeToken(token.value.token, () => {});
  await openSession(name.value);
  handleConferenceFlow();
};

onMounted(async () => {
  await main();
});
</script>
<template>
  <div class="container px-4 mt-4">
    <div class="row justify-content-around mt-3">
      <div class="col-4 shadow p-3 mb-5 bg-body rounded">
        <h2>Self-View</h2>
        <div id="self-view">
          <!-- Container for the local participant media stream -->
          <p id="self-view-username"></p>
          <i class="display-1 bi bi-person-video position-relative"></i>
        </div>

        <button
          type="button"
          class="btn btn-dark"
          id="btn-join"
          @click="join()"
        >
          Join
        </button>
        |
        <button
          type="button"
          class="btn btn-dark"
          id="btn-leave"
          @click="leave"
        >
          Leave
        </button>
      </div>

      <div class="col-4 shadow p-3 mb-5 bg-body rounded">
        <h2>Remote-View</h2>
        <div id="remote-view">
          <!-- Container for the remote participant media stream -->
          <p id="remote-view-username"></p>
          <i class="display-1 bi bi-person-video position-relative"></i>
        </div>

        <button
          type="button"
          class="btn btn-dark"
          id="btn-invite"
          @click="invite"
        >
          <i class="bi bi-clipboard2-plus-fill"></i> Invite
        </button>
      </div>
    </div>
  </div>
</template>
