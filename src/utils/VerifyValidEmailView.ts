import http from "@/helpers/http";

export function VerifyValidEmailView() {
  const urlWindow = window.location.search;
  const urlParams = new URLSearchParams(urlWindow);
  const urlBack = urlParams.get("verify_url") as string;
  const data = urlBack.split("/", 8);

  http.get(`email/verify/${data[6]}/${data[7]}`).then(() => {
    window.location.href = "/";
  });
}
