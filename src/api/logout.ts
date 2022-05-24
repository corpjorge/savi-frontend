import http from "@/helpers/http";

export const logout = async () => {
  return await http.post("logout");
};
