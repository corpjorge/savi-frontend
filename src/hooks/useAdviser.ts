import { administrator } from "@/api/administrator";
import { reactive } from "vue";

export const useAdviser = async () => {
  const admins = reactive({
    advisers: [] as object[],
  });

  await administrator().then((response) => {
    response.data.map((adviser: any) =>
      adviser.role_id == 3
        ? (admins.advisers = [...admins.advisers, adviser])
        : null
    );
  });

  return admins.advisers;
};
