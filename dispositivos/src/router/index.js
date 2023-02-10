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
      path: '/Sensor/:id',
      name: 'Sensor',
      component: () => import('../components/Sensor.vue'),
    },
    {
      path: '/EjecutorList',
      name: 'EjecutorList',
      component: () => import('../views/EjecutorView.vue')
    },
    {
      path: '/Ejecutor/:id',
      name: 'Ejecutor',
      component: () => import('../components/Ejecutor.vue'),
    },
  ]
})

export default router
