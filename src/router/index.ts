import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import HomeAdmin from "../views/HomeAdminView.vue";
import { user } from "@/api/user";
import { VerifyValidEmailView } from "@/utils/VerifyValidEmailView";
import { useLayout } from "@/hooks/useLayout";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => useLayout,
    },
    {
      path: "/inicio",
      name: "Home",
      component: Home,
    },
    {
      path: "/inicio/admin",
      name: "Home-Admin",
      component: HomeAdmin,
    },
    {
      path: "/verificar-correo",
      name: "Verify-Email",
      component: () => import("../views/VerifyEmailView.vue"),
    },
    {
      path: "/verificar/correo/",
      name: "Verify-Email-Link",
      component: () => VerifyValidEmailView,
    },
  ],
});

router.beforeEach(async (to) => {
  const response = await user();

  if (response.unauthenticated && to.name !== "Login") {
    return { name: "Login" };
  }

  if (
    response.verifyEmail &&
    to.name !== "Verify-Email" &&
    to.name !== "Verify-Email-Link"
  ) {
    return { name: "Verify-Email" };
  }

  if (!response.unauthenticated && to.name === "Login") {
    return { name: "Home" };
  }
});
export default router;
