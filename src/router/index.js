import Vue from 'vue'
import VueRouter from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import PrivateLayout from '@/layouts/PrivateLayout.vue'
import HomeView from '@/views/HomeView.vue'
import TasksListView from '@/views/TasksListView.vue'
import TasksUpdateView from '@/views/TasksUpdateView.vue'
import LoginView from '@/views/LoginView.vue'

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
      {
        path: 'login',
        name: 'login',
        component: LoginView,
      },
    ],
  },
  {
    path: '/tasks',
    component: PrivateLayout,
    children: [
      {
        path: ':id',
        name: 'taskUpdate',
        component: TasksUpdateView,
      },
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
