import VoxeetSDK from "@voxeet/voxeet-web-sdk";

export const openSession = async (sessionName: string) => {
  try {
    await VoxeetSDK.session.open({ name: sessionName });
  } catch (error) {
    console.error(error);
  }
};

export const createAndJoinConference = async (
  conferenceAlias: string,
  participantName: string
) => {
  if (!VoxeetSDK.session.isOpen()) {
    await openSession(participantName);
  }
  const joinOptions = {
    constraints: { audio: true, video: true },
  };
  const conferenceOptions = {
    alias: conferenceAlias,
  };
  try {
    const conference = await VoxeetSDK.conference.create(conferenceOptions);
    await VoxeetSDK.conference.join(conference, joinOptions);
  } catch (error) {
    console.error(error);
  }
};

export const handleConferenceFlow = () => {
  VoxeetSDK.conference.on("streamAdded", (participant, stream) => {
    if (stream.type === "Camera") {
      shareVideo(participant, stream);
    }
  });

  VoxeetSDK.conference.on("streamUpdated", (participant, stream) => {
    if (stream.type === "Camera" && stream.getVideoTracks().length) {
      shareVideo(participant, stream);
    }
  });

  VoxeetSDK.conference.on("streamRemoved", (participant, stream) => {
    console.log(`Stream Removed for ${participant.info.name}`);
    const videoNode: any = document.getElementById(`video-${participant.id}`);
    if (videoNode) {
      videoNode.parentNode.removeChild(videoNode);
    }
  });

  VoxeetSDK.conference.on("left", async () => {
    await VoxeetSDK.session.close();
    console.log("Session closed.");
  });
};

export const shareVideo = (
  participant: { id: string; info: { name: any } },
  stream: any
) => {
  let perspective = "self-view";
  if (VoxeetSDK.session.participant.id !== participant.id) {
    console.log("Adding media stream for remote user.");
    perspective = "remote-view";
  }

  let videoNode: any = document.getElementById(`video-${participant.id}`);
  if (videoNode) {
    console.log("Video node already created");
  } else {
    videoNode = document.createElement("video");
    videoNode.setAttribute("id", `video-${participant.id}`);
    videoNode.setAttribute("height", "100%");
    videoNode.setAttribute("width", "100%");
    videoNode.muted = true; // Don't echo local audio
    videoNode.autoplay = true; // Start right away
    videoNode.playsinline = true; // Not full screen

    const videoContainer: any = document.getElementById(perspective);
    videoContainer.lastElementChild.replaceWith(videoNode);
    console.log("asdfas", videoNode);
    videoContainer.firstElementChild.innerText = participant.info.name;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  navigator.attachMediaStream(videoNode, stream);
};

export const leaveConference = async () => {
  try {
    await VoxeetSDK.conference.leave();
  } catch (error) {
    console.error(error);
  }
};
