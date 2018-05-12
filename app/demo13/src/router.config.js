import About from "./components/About.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import BasicParameter   from "./components/economicBenefitCalculation/BasicParameter.vue"
export default{
	routes:[
		{path:"/Login",component:Login},
		{
			path:"/Home",
			component:Home,
			
			children:[{
				path:"about",
				component:About
			},{
				path:"basicParameter",
				component:BasicParameter
			},{
				path:"",
				component:BasicParameter
			}
			]
		},
		{path:"/*",redirect:"/Login"}
	]
}