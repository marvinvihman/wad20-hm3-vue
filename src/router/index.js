import Vue from 'vue'
import VueRouter from 'vue-router'
import Browse_page from "@/views/Browse_page";
import Login_page from "@/views/Login_page";
import Main_page from "@/views/Main_page";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login_page
  },
  {
    path: '/profiles',
    name: 'Browse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Browse_page
  },
  {
    path: '/main',
    name: 'Main',
    component: Main_page
  }
]

const router = new VueRouter({
  routes
})

export default router
