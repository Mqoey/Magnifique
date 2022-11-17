import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/About/AboutUsView.vue'
import FaqView from '../views/About/FaqView.vue'
import OurProcessView from '../views/About/OurProcessView.vue'
import OurTeamView from '../views/About/OurTeamView.vue'
import ServiceView from '../views/ServiceView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutUsView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FaqView
  },
  {
    path: '/process',
    name: 'process',
    component: OurProcessView
  },
  {
    path: '/team',
    name: 'team',
    component: OurTeamView
  },
  {
    path: '/services',
    name: 'services',
    component: ServiceView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
