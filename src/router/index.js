import Vue from 'vue'
import VueRouter from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import PrivateLayout from '@/layouts/PrivateLayout.vue'
import HomeView from '@/views/HomeView.vue'
import TasksListView from '@/views/TasksListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
    ],
  },
  {
    path: '/tasks',
    component: PrivateLayout,
    children: [
      {
        path: '',
        name: 'taskList',
        component: TasksListView,
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
