import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'root', redirect: '/auth/me' },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
  },
  {
    path: '/auth/me',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
  {
    path: '/auth/token',
    name: 'Token',
    component: () => import(/* webpackChunkName: "token" */ '../views/Token.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if(to.name === 'Login' || to.name === 'Signin') return true
  else 
    return localStorage.getItem('jwtapptoken') ? true : { name: 'Login' };
});

export default router
