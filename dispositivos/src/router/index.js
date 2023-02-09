import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/SensorList',
      name: 'SensorList',
      component: () => import('../views/SensorView.vue')
    },
    {
      path: '/sensor/:id',
      name: 'Sensor',
      component: () => import('../components/Sensor.vue'),
  },
  ]
})

export default router
