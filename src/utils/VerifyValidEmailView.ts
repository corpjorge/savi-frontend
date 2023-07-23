import http from "@/helpers/http";

export function VerifyValidEmailView() {
  const urlWindow = window.location.search;
  const urlParams = new URLSearchParams(urlWindow);
  let urlBack = urlParams.get("verify_url") as string;

  urlBack = decodeURIComponent(urlBack);

  console.log(urlBack);

  http.get(urlBack).then(() => {
    window.location.href = "/";
  });
}
