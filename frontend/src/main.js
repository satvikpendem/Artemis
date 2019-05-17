import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

import util from "@/plugins/util.js"
Vue.use(util)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
