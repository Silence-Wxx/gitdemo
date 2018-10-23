import Vue from 'vue'
import App from './App.vue'
import contentmenu from 'v-contextmenu'
import 'v-contextmenu/dist/index.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(contentmenu);
new Vue({
  el: '#app',
  render: h => h(App)
})
