import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/pages/home/home.vue'
import login from '@/components/pages/signin/signin.vue'
import checkout from '@/components/pages/user/checkout.vue'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/login',
      name:'login',
      component: login
    },
    {
      path:'/checkout',
      name:'checkout',
      component:checkout
    }
  ]
})
