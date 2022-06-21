import http from "@/helpers/http";

export const meeting = async () => {
  return await http.get("/meetings/user");
};
