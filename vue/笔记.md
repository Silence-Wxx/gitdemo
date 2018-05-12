# vue 笔记#
## 如何搭建vue的环境 ##
1. 安装vue-cli脚手架
cnpm install vue-cli -g
2. 下载一个vue的webpack脚手架
vue init webpack-simple 项目名称 
3. 下载其依赖以及运行

    cnpm install
    npm run dev
4. 删除app中一些内容 保留js中的语句 详情请看demo0中的app.vue
再次强调 data是一个带有返回值的函数，不再是一个对象了

要熟悉webpack-simple脚手架的每个文件的作用以及语法，直到怎么去修改

建议在谷歌浏览器上下载一个vue devTools插件 还有一个Markdown preview plus插件
如果谷歌打不开应用商店，可以在网上找到 离线版的插件使用
## 数据绑定##
vue数据是写在data对象中的 

* v-text 原装输出
* v-html 输出html
* v-once 输出一次
上诉标签的可添加属性
* .lazy 懒加载
* .number 自动转换为数字
* .trim 去除两端的空格

## 表单绑定 ##
v-model采取的是双向双向绑定，不是单向的。也就是说html页面被修改后，vue绑定的内容也会发生变化。
在js中修改vue中data属性，同样的在html也会发生改变。

v-model绑定的是标签的value值而不是html，这两者的差别可以看看jQuery中html与val方法介绍

## 事件 ##
事件触发的是一个方法，vue方法是写在methods对象中，注意在methods中是不能直接拿到data对象中的
值，可以通过this对象获取到。注意一下vue使用了轻量级别的jQuery，故事件名称与jQuery相同，而不
是Html原生的。

事件在标签中可以使用两种方式 ，event代表事件触发的行为，function代表事件触发执行的方法
1. 使用v-on:event="function()"进行绑定
2. 使用@event="function()"进行绑定(推荐)

事件带有的属性
.prevent 阻止默认事件的触发 比如a标签
.stop 阻止事件传播（冒泡）
.capture 事件捕获（捕获事件优先）
.self 只会在完全属于自己的dom上触发，其他的不会
.once 事件只会被触发一次

按键操作（通过keyup keypresss keydown来触发），vue自定义了一些按键别名，
模板 <input type="text" @keydown.enter="function"> 在输入文本框中按下enter键触发
.enter .tab .delete .esc .space .up .down .left .right
也可以通过全局config.keyCodes 对象自定义按键修饰符别名：

## 页面逻辑 ##
### 条件渲染 ###
条件渲染是指在标签上加上某些vue指令，可以控制标签可见性。

express支持js的语法（比如（1+1）==1），如果是字符串则需要加上单引号，
但表达式结果为true显示，否则不显示，可以搭配v-else-if,v-else一起使用
1. v-if="expreess" 当表示式为true动态创建显示，为false会销毁
2. v-show="express" 当表达式为true让其可见（通过css样式达到的），为false不可见

### 列表渲染 ###
可以使用 v-for 指令来做一些重复的标签。v-for 指令需要使用 item in/of items 形式的特殊语法，items 是源数据,item是原数据迭代的别名，使用v-for一定要将：key属性赋值，这个值一般用索引
1. 遍历数组 v-for="(item, index) in items" item为迭代器的值，index为当前迭代的次数
2. 遍历对象 v-for="(value, key, index) in object" value为对象键值对的值，key为键值对的键，index为当前迭代的次数

Vue 包含一组观察数组的变异方法，所以它们也将会触发视图更新：
push() 压入队尾元素
pop() 弹出队尾元素
shift() 弹出队头元素
unshift() 压入到队头
sort() 排序
reverse() 颠倒数组
通过vm.$set(vm.items, indexOfItem, newValue)来设置元素会触发更新dom

## 计算属性 ##
计算属性作为vue的一个对象，主要作用式做一些复杂的重复的计算，例如我们有时候会对data对象的值进行
一些操作之后在使用，这个时候计算属性就派上用场了。

只要computed对象里面存储的是带有返回值的方法，这个方法也就相当于一个data对象中的属性，也是可以直接使用的。方法会对里面的变量进行监听，只要发生变化就会重新运行，返回值也就发生了变化。

## 侦听器 ##
Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。

watch作为vue这种的一个对象，里面储存的是方法，
    watch: {
        // 如果 `data` 发生改变，这个函数就会运行
        data: function (newVal, oldValue) {
            dosomething....
        }
    }

## v-bind ##
一个标签可以有多个属性，如果想将data绑定到属性中，让其属性成为响应式的可以使用v-bind。由于属性在html
中是不能通过用户操作改变的，应此v-bind指令是单向的。下面来看看v-bind的使用方法：
1. <a v-bind:href="msg">百度一下</a>
2. <a :href="msg">百度一下</a>

绑定class属性，由于class可以有多个值，故可以使用数组或者对象来实现
1. 使用对象  <div :class="{active:true}">我是黑色的</div>
2. 使用数组  
    <div v-bind:class="[activeClass, errorClass]"></div>
    data: {
        activeClass: 'active'
    }

## 组件 ##
什么是组件，组件可以理解为自定义的一种标签，比如我们会在很多位置用到按钮，而原生态的按钮只提供了比较
基础的功能，使用使用需要修改样式。因此能不能自己对一些常用的标签进行包装一下，之后使用可以直接使用了，
这种做法就是组件开发。

### 组件之间的通行 ###
由于组件开发可以减少重复性代码，但是也带来了一些问题。当不使用组件开始的时候，所有内容都在同一个文件
不存在交流问题，但是当使用组件开发的时候，父组件与子组件是在不同的文件中，通讯就变得比较复杂了

首先是父组件向子组件通讯，原理是通过标签的自定义属性来做
1. 父组件在标签上引用自定义属性  <Button :receiveMsg="msg"> 
2. 子组件通过props中的值进行接受  props:{receiveMsg:String},注意属性值要相同

子组件向父组件进行传值，是通过事件传递值的
1. 在子组件中定义触发事件  this.$emit("eventName",sendMsg);  eventName事件名称 ，sednMsg 发送信息
2. 在父组件中子组件上添加自定义事件，注意触发函数必须是无参的 <Button :receiveMsg="msg" @send="get"> </Button>

## 组件的生命周期 ##


## slot 插槽 ##
在使用自定义标签的时候，一般都是单闭合标签，可以对标签包围的html不起作用，
slot标签可以解决这个问题，只要在子组件中添加slot插槽即可。
注意一下 当使用  <template slot="A" scoped="msg">{{msg}}</template>其父组件的msg会传递到子组件中，在子组件中修改会改变父组件的值