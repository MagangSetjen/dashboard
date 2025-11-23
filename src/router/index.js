import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

// child components
import DashboardHome from "../components/DashboardHome.vue";
import DataPekerjaan from "../components/DataPekerjaan.vue";

const routes = [
  { path: "/", name: "Login", component: Login },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        name: "DashboardHome",
        component: DashboardHome, // Jenjang + Statcard + DataSekolah
      },
      {
        path: "rangking",
        name: "RangkingSekolah",
        component: DataPekerjaan,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
