import http from "@/helpers/http";

export const meetingsMonths = async (months: number) => {
  return await http.get(`/meetings/months/${months}`);
};
