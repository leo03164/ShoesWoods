import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('../pages/HomePage.vue')
const ShopPage = () => import('../pages/ShopPage.vue')
const NewsPage = () => import('../pages/NewsPage.vue')
const ContactPage = () => import('../pages/ContactPage.vue')
const RecommendationPage = () => import('../pages/RecommendationPage.vue')
const NotesPage = () => import('../pages/NotesPage.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/shop',
    name: 'Shop',
    component: ShopPage
  },
  {
    path: '/news',
    name: 'News',
    component: NewsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: RecommendationPage
  },
  {
    path: '/notes',
    name: 'Notes',
    component: NotesPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
