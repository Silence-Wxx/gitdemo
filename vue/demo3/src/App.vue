<template>
  <div id="app">
    <p>事件 可以用 v-on 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。</p>
    <hr>
    <p>点击一下说hello world 使用v-on方式</p>
    <button v-on:click="sayHello()">sayHello</button>
    <hr>
    <p>点击一下说hello world 使用@方式 @相当于v-on:</p>
    <button @click="sayHello()">sayHello</button>
    <hr>
    <p>事件中传值</p>
    <button @click="say('tom')">sayHello tom</button>
    <hr>
    <p>事件修饰符 prevent 停止标签的默认行为</p>
    <a href="https://www.baidu.com" @click="enter">进度百度</a><br>
    <a href="https://www.baidu.com" @click.prevent="enter">不好意思，你现在无法进度百度</a>
    <hr>
    <p>事件修饰符 stop 停止标签的冒泡 capture事件为捕获模式 self 只在自身情况使用 </p>
    <div @click="say('div')" >
      <button @click="say('button')">原生的</button>
    </div>
    <div @click="say('div')" width="100px">
      <button @click.stop="say('button')">停止冒泡</button>
    </div>
    <div @click.capture="say('div')" width="100px">
      <button @click="say('button')">捕获模式</button>
    </div>
    <div @click.self="say('div')" width="100px">
      <button @click="say('button')">self模式</button>
    </div>
     <div @click="say('div')" width="100px">
      <button @click.once="say('button')">一次性的模式</button>
    </div>
    <hr>
    <p>系统修饰键 有enter .tab .delete .esc .space .up .down .left .right</p> 
    <input type="text" @keyup.esc.prevent="say('tab')">只有esc有用
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
       
      }
    },
    methods: {
      sayHello(){
        alert("hello world")
      },
      say(msg){
        alert("hello"+" "+msg);
      },
      enter(){
        alert("要进入百度了");
       
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
