import http from "@/helpers/http";
import axios from "axios";

export const authenticate = async (credentials: object) => {
  await axios.get(`${import.meta.env.VITE_APP_URL}/sanctum/csrf-cookie`);
  return await http.post("login", credentials);
};
