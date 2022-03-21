import Vue from 'vue'
import App from './App.vue'
import GzUI from '../packages'

Vue.config.productionTip = false

Vue.use(GzUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
