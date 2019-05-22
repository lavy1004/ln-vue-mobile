import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/index'
import Main from '@/components/pages/main'
import Work from '@/components/pages/work/workList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/main'
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        authorized: false
      },
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      meta: {
        authorized: false
      },
      component: Main
    },
    {
      path: '/workList',
      name: 'workList',
      meta: {
        authorized: false
      },
      component: Work,
      children: [
        {
          path: '/detail',
          name: 'detail',
          component: () => import('@/components/pages/work/workDetail.vue')
        }
      ]
    }
  ]
})
