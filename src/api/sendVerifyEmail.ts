import http from "@/helpers/http";
import { reactive } from "vue";

export const sendVerifyEmail = async () => {
  const data = reactive({
    loading: true,
    error: null,
    VerificationAlreadyDone: false,
  });

  await http
    .post("/email/verification-notification")
    .then(() => {
      localStorage.setItem("emailCheck", String(false));
    })
    .catch((error) => {
      localStorage.setItem("emailCheck", String(true));
      if (error.response.data?.message === "Email already verified.") {
        data.VerificationAlreadyDone = true;
      }
      data.error = error.response.data?.message;
    });

  return data;
};
