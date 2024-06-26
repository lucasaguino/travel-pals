import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CurrentTripPage from '@/views/CurrentTripPage.vue'
import ProfileView from '@/views/ProfileView.vue'
import TripPage from '@/views/TripPage.vue'
import TripPagePrague from '@/views/TripPagePrague.vue'
import TripPageBerlin from '@/views/TripPageBerlin.vue'
import TripPageCairo from '@/views/TripPageCairo.vue'
import TripPageMadrid from '@/views/TripPageMadrid.vue'
import CreateNewTrip from '@/views/CreateNewTrip.vue'
import SummaryPageBerlinCathedral from '@/views/SummaryPageBerlinCathedral.vue'
import SummaryPagePyramids from '@/views/SummaryPagePyramids.vue'
import SummaryPagePragueCastle from '@/views/SummaryPagePragueCastle.vue'

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
      path: '/point-of-interest/berlin-cathedral',
      name: 'berlin-cathedral',
      component: SummaryPageBerlinCathedral,
    },
    {
      path: '/point-of-interest/pyramids',
      name: 'pyramids',
      component: SummaryPagePyramids,
    },
    {
      path: '/point-of-interest/prague-castle',
      name: 'prague',
      component: SummaryPagePragueCastle,
    },
    {
      path: '/profiles/:id/trips/:trip',
      name: 'trip-info',
      component: TripPage,
    },
    {
      path: '/trip-page-prague',
      name: 'trip-page-prague',
      component: TripPagePrague,
    },
    {
      path: '/trip-page-berlin',
      name: 'trip-page-berlin',
      component: TripPageBerlin,
    },
    {
      path: '/trip-page-cairo',
      name: 'trip-page-cairo',
      component: TripPageCairo,
    },
    {
      path: '/trip-page-madrid',
      name: 'trip-page-madrid',
      component: TripPageMadrid,
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
