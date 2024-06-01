import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
import login from '../views/login.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
  ]
})

export default router
