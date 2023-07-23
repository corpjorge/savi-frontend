import http from "@/helpers/http";

export function VerifyValidEmailView() {
  const urlWindow = window.location.search;
  const urlParams = new URLSearchParams(urlWindow);
  let urlBack = urlParams.get("verify_url") as string;

  // Decodifica la URL
  urlBack = decodeURIComponent(urlBack);

  // Obtiene la cadena después del primer '?'
  const queryString = urlBack.split("?")[1];

  // Divide la cadena en '/'
  const data = queryString.split("/");

  http.get(`email/verify/${data[2]}/${data[3].split("?")[0]}`).then(() => {
    window.location.href = "/";
  });
}
