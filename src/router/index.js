import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/index'
import Main from '@/components/pages/main'

import Work from '@/components/pages/work/work'
import Qna from '@/components/pages/qna/qna'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      redirect: '/login'
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
      path: '/work',
      name: 'work',
      meta: {
        authorized: false
      },
      component: Work,
      children: [
        {
          path: '/',
          name: 'workList',
          component: () => import('@/components/pages/work/workList'),
          props: {id: this.id, result: true}
        },
        {
          path: 'workDetail/:id',
          name: 'workDetail',
          component: () => import('@/components/pages/work/workDetail')
        },
        {
          path: 'workCompletion/:id',
          name: 'workCompletion',
          component: () => import('@/components/pages/work/workCompletion'),
        }
      ]
    },
    {
      path: '/qna',
      name: 'qna',
      meta: {
        authorized: false
      },
      component: Qna,
      children: [
        {
          path: '/',
          name: 'qnaList',
          component: () => import('@/components/pages/qna/qnaList')
        },
        {
          path: 'qnaDetail/:id/:result',
          name: 'qnaDetail',
          component: () => import('@/components/pages/qna/qnaDetail')
        }
      ]
    }
  ]
})
