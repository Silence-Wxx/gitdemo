import Vue from 'vue'
import App from './App.vue'
import Axios from "axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$http=Axios;
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
