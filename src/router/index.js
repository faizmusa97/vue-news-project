import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/China',
    name: 'China',
    component: () => import(/* webpackChunkName: "about" */ '../views/China.vue')
  },
  {
    path: '/',
    name: 'Home My',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomesMy.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
//  This is the place where all the vue page will route here. 
//  so we can just call all the page that have been route leter 