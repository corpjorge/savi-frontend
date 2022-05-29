import http from "@/helpers/http";

export const administrator = async () => {
  return await http.get("/admins");
};
