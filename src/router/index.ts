import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useNotes } from '@/store/store'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SingupView from '../views/SingupView.vue'
import LoggedView from '../views/LoggedView.vue'
import LoginplsView from '../views/LoginplsView.vue'
import AlreadyloggedView from '../views/AlreadyloggedView.vue'
import LogoutView from '../views/LogoutView.vue'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/loginpls',
    name: 'loginpls',
    component: LoginplsView,
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView,
    meta:{
      requireAuth : true
    }
  },
  {
    path: '/alreadylogged',
    name: 'alreadylogged',
    component: AlreadyloggedView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{
      requireUnAuth : true
    }
  },
  {
    path: '/singup',
    name: 'singup',
    component: SingupView,
    meta:{
      requireUnAuth : true
    }
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
  const needNoAuth = to.meta.requireUnAuth
  const store = useNotes()
  if(needAuth && !store.auth){
    next('loginpls')
    return
    }
  if(needNoAuth && store.auth){
    next('Alreadylogged')
    return
  }
  next()
  }

)

export default router
