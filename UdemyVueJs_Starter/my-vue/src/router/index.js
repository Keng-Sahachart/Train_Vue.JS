import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/newpage",
    name: "NewPage",
    component: () => import("../views/NewPage.vue")
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: () => import("../views/DataBinding.vue")
  },
  {
    path: "/eventhandler",
    name: "EventHandler",
    component: () => import("../views/EventHandler.vue")
  },
  {
    path: "/vif",
    name: "Vif",
    component: () => import("../views/Vif.vue")
  },
  {
    path: "/vshow",
    name: "Vshow",
    component: () => import("../views/Vshow.vue")
  },
  {
    path: "/vfor",
    name: "Vfor",
    component: () => import("../views/Vfor.vue")
  },
  {
    path: "/axiosgetuser",
    name: "AxiosGetUser",
    component: () => import("../views/AxiosGetUser.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
