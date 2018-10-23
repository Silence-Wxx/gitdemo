
import Vue from 'vue'
import Router from 'vue-router';
import { resolve } from 'upath';


Vue.use(Router);
export default new Router({
	routes:[
		{path:"/New",component:resolve=>require(['./components/New.vue'],resolve)},
		{path:"/Home",component:resolve=>require(['./components/Home.vue'],resolve)},
		{path:"/Hello",component:resolve=>require(['./components/Hello.vue'],resolve)},
	]
});