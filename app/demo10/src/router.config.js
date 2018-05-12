import About from "./components/About.vue"
import Home from "./components/home.vue"
export default{
	routes:[
		{path:"/Home",component:Home},
		{path:"/About/:id",component:About},
		{path:"/*",redirect:"/Home"}
	]
}