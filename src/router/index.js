import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from './auth.routes'
import tasksRoutes from './tasks.routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...authRoutes, ...tasksRoutes],
})

export default router
