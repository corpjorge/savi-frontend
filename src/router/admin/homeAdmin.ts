import HomeAdmin from "@/views/HomeAdminView.vue";
import LayoutAdmin from "@/components/layouts/LayoutAdmin.vue";

export default [
  {
    path: "/inicio/admin",
    component: LayoutAdmin,
    children: [
      {
        path: "",
        name: "Home-Admin",
        component: HomeAdmin,
      },
    ],
  },
];
