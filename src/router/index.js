import { createRouter, createWebHistory } from "vue-router";
import NotFoundView from "../views/ErrorViews/404.vue";
import HomeView from "../views/HomeView.vue";
import LbView from "../views/LbView.vue";
import UserProfileView from "../views/UserView.vue"
const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home",
    },
    component: HomeView,
  },
  {
    path: "/lb",
    name: "leaderboards",
    meta: {
      title: "Leaderboards",
    },
    component: LbView,
  },
  {
    path: "/user/:id",
    name: "userprofile",
    meta: {
      title: "Player profile",
    },
    component: UserProfileView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    meta: {
      title: "Uh oh!",
    },
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
