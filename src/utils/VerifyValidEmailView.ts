import http from "@/helpers/http";

export function VerifyValidEmailView() {
  const urlWindow = window.location.search;
  const urlParams = new URLSearchParams(urlWindow);
  let urlBack = urlParams.get("verify_url") as string;

  urlBack = decodeURIComponent(urlBack);

  const verifyIndex = urlBack.indexOf("email/verify/");
  const data = urlBack.substring(verifyIndex + "email/verify/".length);

  http.get(`email/verify/${data}`).then(() => {
    window.location.href = "/";
  });
}
