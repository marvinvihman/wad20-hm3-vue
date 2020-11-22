import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login_page')
  },
  {
    path: '/profiles',
    name: 'Browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Browse_page.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main_page')
  }
]

const router = new VueRouter({
  routes
})

export default router
