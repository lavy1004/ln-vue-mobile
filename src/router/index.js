import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/index'
import Main from '@/components/pages/main'

// import Work from './child/work'
import WorkList from '@/components/pages/work/workList'
import WorkDetail from '@/components/pages/work/workDetail'

import QnaList from '@/components/pages/qna/qnaList'
import QnaDetail from '@/components/pages/qna/qnaDetail'

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
      name: 'workList',
      meta: {
        authorized: false
      },
      component: WorkList
    },
    {
      path: '/workDetail',
      name: 'workDetail',
      meta: {
        authorized: false
      },
      component: WorkDetail
    },
    {
      path: '/qna',
      name: 'qnaList',
      meta: {
        authorized: false
      },
      component: QnaList
    },
    {
      path: '/qnaDetail',
      name: 'qnaDetail',
      meta: {
        authorized: false
      },
      component: QnaDetail
    }
  ]
})
