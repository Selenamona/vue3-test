import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("/@/views/homePage/home.vue")
  },
  {
    path: "/personal",
    component: () => import("/@/views/personal/personal.vue")
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});
