import http from "@/helpers/http";
import { ref } from "vue";

export const getToken = async () => {
  const data = ref<string>("");
  await http
    .get("/dolby/token")
    .then((response) => {
      localStorage.setItem("dolby", JSON.stringify(response.data));
      data.value = response.data.token;
    })
    .catch(() => {
      localStorage.setItem(
        "dolby",
        JSON.stringify(import.meta.env.VITE_DOLBY_TOKEN)
      );
      data.value = import.meta.env.VITE_DOLBY_TOKEN;
    });

  return {
    token: data.value,
  };
};
