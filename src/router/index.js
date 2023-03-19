import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '../views/TeamView.vue'
import DownloadView from '../views/DownloadView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home'
    },
    component: HomeView
  },
  {
    path: '/team',
    name: 'team',
    meta: {
      title: 'Our team'
    },
    component: TeamView
  },
  {
    path: '/download',
    name: 'download',
    meta: {
      title: 'Downloads'
    },
    component: DownloadView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
