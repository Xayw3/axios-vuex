import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import JokesView from "../views/JokesView.vue";
import JokeItem from "../components/JokeItem/JokeItem.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "jokes",
    component: JokesView,
  },
  {
    path: "/:id",
    component: JokeItem,
  },
  {
    path: "/names",
    name: "randomNames",
    component: () =>
      import(/* webpackChunkName: "name" */ "../views/RandomNamesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
