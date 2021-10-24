import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/main-page.vue'
import Login from '../views/logIn.vue'
import AddProduct from '../views/add-page.vue'
import ForgotPass from '../views/forgotPassPage.vue'
import RegisterUser from '../views/registerPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/logIn.vue')
  },
  {
    path: '/add_product',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/forgot_password',
    name: 'Forgot Password',
    component: ForgotPass
  },
  {
    path: '/register_user',
    name: 'Registering User',
    component: RegisterUser
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
