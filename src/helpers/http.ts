import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
});

http.interceptors.request.use(function (config: any) {
  const token = sessionStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default http;
