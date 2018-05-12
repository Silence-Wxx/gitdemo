<template>
  <div id="app">
    <h1>expression表达式 绑定value</h1>
    <input type="text" v-model="msg" /><br>
    <span>绑定：输入是啥，输出就是啥:<span v-text="msg"></span></span>
    <hr>
    <p>一次性绑定:</p><p v-once v-text="msg"> </p>
    <hr>
    <div>经过html处理的文字</div><div v-html="msg"> </div>
    <hr>
    <h2>修饰符</h2>
    <input type="text" v-model.lazy="msg1" />
    <p>绑定：等你输出完我在刷新: {{msg1}}</p>
    <input type="text" v-model.number.lazy="msg2" @keydown.enter="leave"/>
    <p>绑定：自动转换为数字,不会将字母赋值给msg2: {{msg2}}</p>
    <input type="text" v-model.trim.lazy="msg3" />
    <p>绑定：自动去除两头的空字符串: {{msg3}}</p>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: "hello",
        msg1:"",
        msg2:2,
        msg3:"" ,
      }
    },
    methods:{
      leave(){
        alert(typeof(this.msg2)+this.msg2);
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
