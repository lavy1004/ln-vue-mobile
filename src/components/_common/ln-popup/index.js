import lnModule from './lnPopup'
lnModule.install = function install (Vue) {
    Vue.component(lnModule.name, lnModule)
  }
export default lnModule
