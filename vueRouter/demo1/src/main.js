import Vue from 'vue'
import App from './App.vue'
import VueContextMenu from 'vue-contextmenu'
import 'vue-contextmenu/style/css/font-awesome.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueContextMenu)
Vue.use(ElementUI);

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

  // 2. 定义路由
  // 每个路由应该映射一个组件。 其中"component" 可以是
  // 通过 Vue.extend() 创建的组件构造器，
  // 或者，只是一个组件配置对象。
  // 我们晚点再讨论嵌套路由。
  const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
  ];
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  });
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
