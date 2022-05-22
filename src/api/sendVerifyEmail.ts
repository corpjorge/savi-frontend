import http from "@/helpers/http";

export const sendVerifyEmail = async () => {
  return await http
    .post("/email/verification-notification")
    .then(() => {
      sessionStorage.setItem("emailCheck", String(false));
    })
    .catch(() => {
      sessionStorage.setItem("emailCheck", String(true));
    });
};
