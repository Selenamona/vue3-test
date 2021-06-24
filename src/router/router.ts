import {RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes:RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("/@/views/homePage/home.vue")
  },
  {
    path: "/demo/verify",
    component: () => import("/@/views/demo/verify.vue")
  },
  {
    path: "/fans",
    component: () => import("/@/views/fans/fans.vue")
  }
  // {
  //   path: "/personal",
  //   component: () => import("/@/views/personal/personal.vue")
  // }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition;
  //   } else {
  //     return { x: 0, y: 0 };
  //   }
  // }
});
