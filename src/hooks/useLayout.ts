import { useRouter } from "vue-router";

export function useLayout() {
  const router = useRouter();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user.type >= 4) {
    router.push({ name: "Home" });
  }

  if (user.type <= 3) {
    router.push({ name: "Home-Admin" });
  }
}
