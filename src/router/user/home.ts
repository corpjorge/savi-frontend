import Home from "@/views/HomeView.vue";
import LayoutUser from "@/components/layouts/LayoutUser.vue";

export default [
  {
    path: "/inicio",
    component: LayoutUser,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
    ],
  },
];
