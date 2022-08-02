<script setup lang="ts">
import VoxeetSDK from "@voxeet/voxeet-web-sdk";
import { onMounted, ref } from "vue";
import { getToken } from "@/api/token";
import { meeting } from "@/api/meeting";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  openSession,
  createAndJoinConference,
  handleConferenceFlow,
  shareVideo,
  leaveConference,
} from "@/hooks/useDolby";

const user = useLocalStorage("user", false);

let alias = ref("");
let name = ref(user.name);
let token = ref();

const join = async () => {
  await createAndJoinConference(alias.value, name.value);
};

const leave = async () => {
  await leaveConference();
};

const main = async () => {
  token.value = await getToken();
  VoxeetSDK.initializeToken(token.value.token, () => {
    console.log("initialized");
  });
  await openSession(name.value);
  handleConferenceFlow();
};

onMounted(async () => {
  await meeting().then((res) => {
    if (res.data.id) {
      alias.value = res.data.meeting;
    }
  });
  await main();
});
</script>
<template>
  <div class="container px-4 mt-4">
    <div class="row justify-content-around mt-3">
      <div class="col-4 shadow p-3 mb-5 bg-body rounded">
        <h2>Self-View</h2>
        <div id="self-view">
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
          <p id="remote-view-username"></p>
          <i class="display-1 bi bi-person-video position-relative"></i>
        </div>
      </div>
    </div>
  </div>
</template>
