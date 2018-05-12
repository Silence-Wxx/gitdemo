<template>
  <div id="app">
    <p>使用v-bind</p>
    <hr>
    <p>使用v-bind:</p>
    <a v-bind:href="msg">百度一下</a>
    <hr>
    <p>使用简写形式</p>
    <a :href="0>1?msg:'https://www.sina.com'">百度一下</a>
    <hr>
    <p>绑定样式</p>
    <div :class="{active:true}">我是黑色的</div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
       msg:"https://www.baidu.com"
      }
    },
    computed: {
     
    },
    methods: {
      say(msg) {
        alert("hello" + " " + msg);
      },
    },
    watch:{
     
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
  .active{
    border: 1px solid #c0c0c0;
    color: red;
  }
</style>
