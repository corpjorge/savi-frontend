import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Home from "../views/HomeView.vue";
import VerifyEmail from "../views/VerifyEmailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/inicio",
      name: "home",
      component: Home,
    },
    {
      path: "/verificar-correo",
      name: "verify-email",
      component: VerifyEmail,
    },
  ],
});

export default router;
