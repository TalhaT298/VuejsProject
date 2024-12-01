// import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       component: HomeView,
//     },
//     {
//       path: '/about',
//       name: 'about',
      
//       component: () => import('../views/AboutView.vue'),
//     },
//   ],
// })

// export default router
import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue'
import AboutView from "@/views/AboutPage.vue";

const routes = [
  { path: "/", component: HomeView},
  { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
