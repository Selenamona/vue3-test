import VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("@/views/homepage/home.vue") },
  {
    path: "/personal",
    component: () => import("@/views/personal/personal.vue")
  }
];

export default router = VueRouter.createRouter({
  routes
});
