import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginVue from '../views/LoginView.vue' 
import HomeView from '../views/HomeView.vue' 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'reg',      
      component: () => import('../views/RegisterView.vue')

    },
    {
      path: '/profile-page',
      name: 'profile',      
      component: () => import('../views/ProfileView.vue')

    },
    {
      path: '/ticket',
      name: 'ticket',      
      component: () => import('../views/ProfileView.vue')

    },
    
  ]
})

export default router
