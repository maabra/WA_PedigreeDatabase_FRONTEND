import { authorization } from "@/services";
import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
  },
  {
    path: "/compare",
    name: "compare",
    component: () =>
      import(/* webpackChunkName: "Compare" */ "../views/Compare.vue"),
  },
  {
    path: "/dog",
    name: "dog",
    component: () =>
      import(/* webpackChunkName: "Dog" */ "../views/Dog.vue"),
  },
  {
    path: "/list",
    name: "list",
    component: () =>
      import(/* webpackChunkName: "List" */ "../views/List.vue"),
  },
  {
    path: "/adddog",
    name: "adddog",
    component: () =>
      import(/* webpackChunkName: "AddDog" */ "../views/AddDog.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let publicSite = ["/login", "/register"];
  let needLogin = !publicSite.includes(to.path);
  let user = authorization.getUser();

  if (needLogin && !user) {
    return next("/login");
  }

  next();
});

export default router;
