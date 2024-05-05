import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SummaryPage from '@/views/SummaryPage.vue'
import CurrentTripPage from '@/views/CurrentTripPage.vue'
import ProfileView from '@/views/ProfileView.vue'
import TripPage from '@/views/TripPage.vue'
import CreateNewTrip from '@/views/CreateNewTrip.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/new-trip',
      name: 'new-trip',
      component: CreateNewTrip
    },
    {
      path: '/profiles/:id',
      name: 'profile',
      component: ProfileView,
    },
    {
      path: '/summary',
      name: 'summary',
      component: SummaryPage,
    },
    {
      path: '/profiles/:id/trips/:trip',
      name: 'trip-info',
      component: TripPage,
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
