import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("../views/homePage/home.vue")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../views/personal/personal.vue")
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes
});
