import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

// const api_url ="https://localhost:9999"

// const store = new Vuex.Store({
//     plugins: [createPersistedState()],
//     state: {},
//     getters: {},
//     mutations: {},
//     actions: {
//         test(context, params){
//             return new Promise((resolve,reject) => {
//                 axios({
//                     method: 'get',
//                     params: params,
//                     url: api_url + 'test',
//                     responseType: 'json'
//                 })
//                 .then(function(res) {
//                     resolve(res.data)
//                 })
//             })
//         }
//     }
// })
