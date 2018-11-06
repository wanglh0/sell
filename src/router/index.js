/*
路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      meta:{
        showFooderGuide:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooderGuide:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooderGuide:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooderGuide:true
      }
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
