import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'root', redirect: '/auth/me' },
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/auth/me',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../views/User.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  if(to.name === 'Login') return true
  else 
    return localStorage.getItem('jwtapptoken') ? true : { name: 'Login' };
});

export default router
