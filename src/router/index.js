import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Timeline from '../views/Timeline.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/timeline', component: Timeline },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;