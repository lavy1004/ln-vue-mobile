import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/pages/login/index'
import Main from '@/components/pages/main'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
