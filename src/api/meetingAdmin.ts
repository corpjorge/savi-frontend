import http from "@/helpers/http";

export const meetingAdmin = async () => {
  return await http.get("/meetings/adviser");
};
