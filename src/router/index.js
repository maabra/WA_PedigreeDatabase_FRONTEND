import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
//import DogDetails from '../components/DogDetails.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/compare",
    name: "compare",
    component: () =>
      import(/* webpackChunkName: "Compare" */ "../views/CompareView.vue"),
  },
  {
    path: "/dog/:_id",
    name: "dog",
    component: () =>
      import(/* webpackChunkName: "Dog" */ "../views/DogView.vue"),
      props: true,
  },
  {
    path: "/kennel/:_id",
    name: "kennel",
    component: () =>
      import(/* webpackChunkName: "Dog" */ "../views/KennelView.vue"),
  },
  {
    path: "/list-dogs",
    name: "list-dogs",
    component: () =>
      import(/* webpackChunkName: "List" */ "../views/ListViewDog.vue"),
  },
  
  {
    path: "/list-kennels",
    name: "list-kennels",
    component: () =>
      import(/* webpackChunkName: "List" */ "../views/ListViewKennel.vue"),
  },
  {
    path: "/addDog",
    name: "addDog",
    component: () =>
      import(/* webpackChunkName: "AddDog" */ "../views/AddDogView.vue"),
  },
  {
    path: "/updateDog/:_id",
    name: "updateDog",
    component: () =>
      import(/* webpackChunkName: "UpdateDog" */ "../views/UpdateDogView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;