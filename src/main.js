// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/css.css'
import '@/assets/scss/common.scss'
import BootstrapVue from 'bootstrap-vue'
import CommonMethodMixin from './mixin/CommonMethodMixin'
import lnui from '@/components/component'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(lnui)
Vue.mixin(CommonMethodMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
