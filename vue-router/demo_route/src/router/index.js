import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routeOptions = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/page02", name: "Page02" },
  { path: "/page03", name: "Page03" }
];

const routes = routeOptions.map(route => {
  return {
    ...route,
    component: () =>
      import(/* webpackChunkName: "[request]" */ `../views/${route.name}.vue`)
  };
});

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
