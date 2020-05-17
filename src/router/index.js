import { createRouter, createWebHistory } from 'vue-router'
import Color from '../views/Color.vue'

const routes = [
  {
    path: '/',
    name: 'UseTab',
    component: () => import('../views/UseTab.vue')
  },
  {
    path: '/color',
    name: 'Color',
    component: Color
  },
  {
    path: '/othello',
    name: 'Othello',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Othello.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
