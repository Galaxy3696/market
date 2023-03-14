import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
export default new VueRouter({
   routes: [
      {
         name:"addcartsuccess",
         path: '/addcartsuccess',
         component: AddCartSuccess,
         meta: { show: true },
      },
      { 
         name: "detail",
         path: '/detail/:skuId?',
         component: Detail,
         meta: { show: true },
      },
      {
         name: "home",
         path: '/home',
         component: Home,
         meta: { show: true },
      },

      {
         name: "search",
         path: '/search/:keyword?',
         component: Search,
         meta: { show: true },
      },

      {
         path: '/login',
         component: Login,
         meta: { show: false },
      },

      {
         path: '/register',
         component: Register,
         meta: { show: false },
      },
      {
         path: '/',
         redirect: '/home'
      }
   ]
})