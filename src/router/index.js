import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import home from '@/views/home'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: 'index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: index,
          meta: { title: '首页', icon: 'index', noCache: true, affix: true }
        },
        {
          path: '/user',
          name: 'user',
          component: () => import('@/views/user/user'),
          meta: { title: '用户', icon: 'user' }
        },
        {
          path: '/user1',
          name: 'user1',
          component: () => import('@/views/user/user1'),
          meta: { title: '用户1', icon: 'user' }
        }
      ]
    }
  ]
})
