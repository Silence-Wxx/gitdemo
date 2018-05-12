import Vue from 'vue';
import VueRouter from "vue-router" ;
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import routerConfig from "./router.config.js";


/*使用路由*/
Vue.use(VueRouter);
/*使用Resource*/
Vue.use(VueResource);
Vue.use(ElementUI);
const router=new VueRouter(routerConfig);
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
