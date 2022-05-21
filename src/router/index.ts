import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/inicio",
      name: "Home",
      component: Home,
    },
    {
      path: "/verificar-correo",
      name: "Verify-Email",
      component: () => import("../views/VerifyEmailView.vue"),
    },
  ],
});

router.beforeEach(async (to, from) => {
  const isAuthenticated = sessionStorage.getItem("token");
  if (!isAuthenticated && to.name !== "Login") {
    return { name: "Login" };
  }
  if (isAuthenticated && to.name === "Login") {
    return { name: "Home" };
  }
});
export default router;
