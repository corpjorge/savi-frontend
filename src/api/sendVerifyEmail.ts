import http from "@/helpers/http";

export const sendVerifyEmail = async () => {
  return await http
    .post("/email/verification-notification")
    .then(() => {
      localStorage.setItem("emailCheck", String(false));
    })
    .catch(() => {
      localStorage.setItem("emailCheck", String(true));
    });
};
