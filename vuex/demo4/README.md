# demo3
使用Action 
1. 首先在vuex注册相应的事件，事件只接受两个参数，所以一般obj为一个对象

	actions:{
	//5秒之后触发 obj为形参对象
	increAsync({commit},obj){
	  setTimeout(()=>{
	    commit('increment',obj.amount);
	   },5000);
	}
	}

2. 使用this.$store.dispatch()调用异步事件，同样也支持mapAction方便出现大量的事件
	this.$store.dispatch('increAsync',{
	amount: 1
	});

详细代码请看app.vue部分	异步这一块还没有实现
## 使用场景 ##
在 Vuex 中，mutation 都是同步事务
Action 提交的是 mutation，而不是直接变更状态，可以包含异步操作
## 使用步骤

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
