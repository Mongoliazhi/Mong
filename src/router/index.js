import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/main/main'
import Classfig from '@/components/classfig'
import Music from '@/components/music/music.vue'
  import TopList from  '@/components/music/topList'

import Cart from '@/components/cart'
import My from '@/components/my'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main1',
      component: Main
    },
    {
      path: '/classfig',
      name: 'Classfig',
      component: Classfig
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
      children:[
        {
          path: 'topList',
          name: 'TopList',
          component: TopList
        },
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/my',
      name: 'My',
      component: My
    }
  ],
})

export default router
