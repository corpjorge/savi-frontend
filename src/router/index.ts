import { createRouter, createWebHistory } from "vue-router";
import { user } from "@/api/user";
import { VerifyValidEmailView } from "@/utils/VerifyValidEmailView";
import { useLayout } from "@/hooks/useLayout";
import Login from "../views/LoginView.vue";
import Home from "@/router/user/home";
import HomeAdmin from "@/router/admin/homeAdmin";

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
      path: "/verificar-correo",
      name: "Verify-Email",
      component: () => import("../views/VerifyEmailView.vue"),
    },
    {
      path: "/verificar/correo/",
      name: "Verify-Email-Link",
      component: () => VerifyValidEmailView,
    },
    {
      path: "/meeting",
      name: "meeting",
      component: () => import("../views/MeetingView.vue"),
    },
    {
      path: "/meeting/admin",
      name: "meeting-admin",
      component: () => import("../views/MeetingAdminView.vue"),
    },
    ...Home,
    ...HomeAdmin,
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
