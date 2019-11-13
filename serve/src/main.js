import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import store from './store'
import http from './http'
// import item from './components/item-group.vue'
Vue.config.productionTip = false
Vue.prototype.$http = http
// Vue.component('item',item)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
