import Vue from 'vue'
import App from './App.vue'
import VueContextMenu from 'vue-contextmenu'
import 'vue-contextmenu/style/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueContextMenu)
Vue.use(ElementUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
