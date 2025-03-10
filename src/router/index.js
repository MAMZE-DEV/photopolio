import { createRouter, createWebHistory } from 'vue-router'
import homeComp from '../views/homeComp.vue'
import photoComp from '../views/photoComp.vue'
import snapComp from '../views/snapComp.vue'
import adminComp from '../views/adminComp.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeComp,
    },
    {
      path: '/home',
      name: 'home2',
      component: homeComp,
    },
    {
      path: '/photo',
      name: 'photo',
      component: photoComp,
    },
    {
      path: '/snap',
      name: 'snap',
      component: snapComp,
    },
    {
      path: '/admin',
      name: 'admin',
      component: adminComp,
    },
  ],
})

export default router
