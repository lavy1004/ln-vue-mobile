// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/css.css'
import '@/assets/scss/common.scss'
import '@/assets/datepicker/vue-airbnb-style-datepicker.min.css'
import BootstrapVue from 'bootstrap-vue'
import CommonMethodMixin from './mixin/CommonMethodMixin'
import AirbnbStyleDatepicker from 'vue-airbnb-style-datepicker'
import lnui from '@/components/component'

Vue.config.productionTip = false
const datepickerOptions = {
  colors: {
    selected: '#3763e0',
    inRange: '#66e2da',
    selectedText: '#fff',
    text: '#565a5c',
    inRangeBorder: '#33dacd',
    disabled: '#fff',
    hoveredInRange: '#67f6ee'
  }
}
Vue.use(AirbnbStyleDatepicker, datepickerOptions)
Vue.use(BootstrapVue)
Vue.use(lnui)
Vue.mixin(CommonMethodMixin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
