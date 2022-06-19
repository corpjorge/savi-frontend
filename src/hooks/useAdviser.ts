import { administrator } from "@/api/administrator";
import { reactive } from "vue";

export const useAdviser = async () => {
  const admins = reactive({
    advisers: [] as object[],
  });

  await administrator().then((response) => {
    response.data.map(
      (adviser: { role_id: number; deleted_at: string; isActive: boolean }) =>
        adviser.role_id == 3 && !adviser.deleted_at && adviser.isActive
          ? (admins.advisers = [...admins.advisers, adviser])
          : null
    );
  });

  return admins.advisers;
};
