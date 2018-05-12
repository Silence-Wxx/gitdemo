<template>
  <div id="app">
    <p>使用模块</p>
    <hr>
    <p>定义组件第一种方式</p>
    <template id="button">
        <button @click="say('button')">点我一下</button>
    </template>
    <hr>
    <p>组件的第二种方式</p>
    <Button2></Button2>
    <hr>
    <p>定义组件第三种方式</p>
    <Button1></Button1>
  </div>
</template>

<script>
  import Button1 from "./conponemts/Button"
  let Button2={
      template:"<button @click='say(\"tom\")'>我是第二种方式创建的</button>",
      methods:{
        say(word){
          alert("hello"+ " " +word);
        }
      }
  }
  export default {
    name: 'app',
    data() {
      return {
        msg: "https://www.baidu.com"
      }
    },
    computed: {
    },
    methods: {
      say(msg) {
        alert("hello" + " " + msg);
      },
    },
    watch: {
    },
    components: {
      Button1: Button1,
      Button: "#button",
      Button2:Button2
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
    margin-top: 10px;
  }
  h1,
  h2 {
    font-weight: normal;
  }
  a {
    color: #42b983;
  }
  .active {
    border: 1px solid #c0c0c0;
    color: red;
  }
</style>
