import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useNotes } from '@/store/store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SingupView from '../views/SingupView.vue'
import LoggedView from '../views/LoggedView.vue'
import LoginplsView from '../views/LoginplsView.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/loginpls',
    name: 'loginpls',
    component: LoginplsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/singup',
    name: 'singup',
    component: SingupView
  },
  {
    path: '/logged',
    name: 'logged',
    component: LoggedView,
    meta:{
      requireAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  const auth = true
  const needAuth = to.meta.requireAuth
  const store = useNotes()
  console.log(store.auth)
  console.log(store.jwt)
  if(needAuth && !store.auth){
    next('loginpls')
  }else{
    next()
  }
})

export default router
