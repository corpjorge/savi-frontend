import http from "@/helpers/http";
import { reactive } from "vue";

export const user = async () => {
  const data = reactive({
    user: null,
    loading: true,
    unauthenticated: false,
    verifyEmail: false,
  });

  await http
    .get("/user")
    .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
      data.user = response.data;
      data.loading = false;
    })
    .catch((error) => {
      data.unauthenticated = error.response.data.message === "Unauthenticated.";
      data.verifyEmail =
        error.response.data.message === "Your email address is not verified.";
    });

  return {
    users: data.user,
    unauthenticated: data.unauthenticated,
    verifyEmail: data.verifyEmail,
    loading: data.loading,
  };
};
