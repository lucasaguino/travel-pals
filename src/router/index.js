import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SummaryPage from '@/views/SummaryPage.vue'
import TripCreationPage from '@/views/TripCreationPage.vue'
import CurrentTripPage from '@/views/CurrentTripPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/summary',
      name: 'summary',
      component: SummaryPage,
    },
    {
      path: '/tripCreation',
      name: 'tripCreation',
      component: TripCreationPage,
    },
    {
      path: '/currentTrip',
      name: 'currentTrip',
      component: CurrentTripPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
