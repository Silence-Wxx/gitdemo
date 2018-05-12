import About from "./components/About.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
export default{
	routes:[
		{path:"/Login",component:Login},
		{
			path:"/Home",
			component:Home,
			children:[{
				path:"about",
				component:About
			}	
			]
		},
		{path:"/*",redirect:"/Login"}
	]
}