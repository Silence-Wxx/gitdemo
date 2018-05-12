# demo1

> A Vue.js project
使用mapState 步骤
1. 在模块中引用mapState方法 import {mapState} from "vuex"
2. 将computed定义为mapState方法
## 使用场景 ##
当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState辅助函数帮助我们生成计算属性
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
