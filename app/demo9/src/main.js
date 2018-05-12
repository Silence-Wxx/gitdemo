import Vue from 'vue'
import VueRouter from "vue-router" 
import App from './App'
import routerConfig from "./router.config.js"
import VueResource from 'vue-resource'

/*使用路由*/
Vue.use(VueRouter);
/*使用Resource*/
Vue.use(VueResource)
const router=new VueRouter(routerConfig);
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
