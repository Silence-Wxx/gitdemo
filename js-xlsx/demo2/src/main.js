import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Axios from 'axios';

/*使用Element插件 */
Vue.use(ElementUI);
Vue.prototype.$http=Axios;
new Vue({
  el: '#app',
  render: h => h(App)
})
