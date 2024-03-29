import { createRouter,createWebHistory  } from 'vue-router'
import Home from '../components/Home.vue'
const routes = [
   {
     path: '/',
     name: 'Home',
     component: Home
   },
   {
    path: '/about',
    name: 'WhatsHappening',
    component: ()=>import('../components/WhatsHappening.vue')
  },
  {
    path: '/oguzhankdk',
    name: 'Profile',
    component: ()=>import('../components/Profile/Profile.vue')
  }
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router