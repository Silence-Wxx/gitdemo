import Vue from 'vue';
import Vuex from "vuex";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from "./router.config.js";
import vuexConfig from "./vuex.config.js"
/*使用Element插件 */
Vue.use(ElementUI);

/*使用vuex消息插件 */
Vue.use(Vuex);
const store =new Vuex.Store(vuexConfig);

/*使用路由*/
Vue.use(VueRouter);


/*使用Resource*/
Vue.use(VueResource);

new Vue({
  el: '#app',
  router: router,
  store:store,
  render: h => h(App)
})
