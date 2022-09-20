import PublicLayout from '@/layouts/PublicLayout.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import SignupView from '@/views/auth/SignupView.vue'

export default [
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
      {
        path: 'signup',
        name: 'signup',
        component: SignupView,
      },
    ],
  },
]
