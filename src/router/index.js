import { createRouter, createWebHistory } from 'vue-router'
import singln from '../pages/singIn/singIn.vue';
import about from '../pages/about/about.vue';
import pricing from '../pages/pricing/pricing.vue';
import blog from '../pages/blog/blog.vue';
import login from '../pages/login/login.vue'
import home from '../pages/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'singln',
      component: singln
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/pricing',
      name: 'hopricingme',
      component: pricing
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },  
  ]
})

export default router;
