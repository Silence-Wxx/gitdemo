// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import Vue from 'vue'
import App from './App'
import router from './router'

// import Vuex from 'vuex'
//import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-chalk/index.css'
// import Axios from 'axios'
// import VCharts from 'v-charts'
// import VeLine from 'v-charts/lib/line'
//import VeBar from 'v-charts/lib/bar'
// import VeHistogram from 'v-charts/lib/histogram'
// import VePie from 'v-charts/lib/pie'
//Vue.use(VCharts)
Vue.config.productionTip = false
Vue.use(window.ELEMENT)
Vue.use(window.Vuex)
// Vue.component(VeLine.name, VeLine)
// Vue.component(VeBar.name, VeBar)
// Vue.component(VeHistogram.name, VeHistogram)
// Vue.component(VePie.name, VePie)
//Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
