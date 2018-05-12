# demo3
使用Getter 
1. 首先在vuex中定义getters,创建查询

	getters:{
	    grossBenefix:state=>{
	      return state.count*state.price;
	    }
	}
2. 引用方法都是一样的
	this.$store.getters.grossBenefix;
	当然也可以使用mapGetters函数 但需要引入
	
	//这种方法没有办法进行传参，故需要再做一次调用即可
	import { mapGetters } from 'vuex'	
## 使用场景 ##
有时候我们需要从 store 中的 state中派生出一些状态，比如计算总销售量=单价-数量
如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
