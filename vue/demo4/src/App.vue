<template>
  <div id="app">
    <p>条件渲染 以及列表渲染</p>
    <hr>
    <p>v-if 根据表达式的正确与否决定是否渲染 可以与v-else以及v-else-if配合使用</p>
    <input type="text" v-model.number="msg">
    <p v-if="msg==='1'">答案为1</p>
    <p v-else-if="msg=='2'">答案为2</p>
    <p v-else> 答案错误</p>
    <hr>
    <p>v-show 根据表达式的正确与否决定是否显示 </p>
    <input type="text" v-model.number="isShow">
    <p v-if="isShow=='1'">可以看到我了</p>
    <hr>
    <p>一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。 因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件 很少改变，则使用 v-if 较好。</p>
    <hr>
    <p>使用v-for 动态创建重复标签 遍历数组</p>
    <select v-model="user" @change="say(user)">
      <option v-for="(key,index) of list" :value="key.age" :key="index"> {{key.username}}+{{index}}</option>
    </select>
    <hr>
    <p>使用v-for 动态创建重复标签 遍历对象</p>
    <ul>
      <li v-for="(value,key,index) in usrObject" :key="index">
         {{ value }}:{{key}} 
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: "",
        isShow: "",
        user: "",
        usrObject: {
          username: "tom",
          age: "12"
        },
        list: [{
          username: "tom",
          age: "12"
        }, {
          username: "tom1",
          age: "13"
        }, {
          username: "tom2",
          age: "14"
        }, {
          username: "tom3",
          age: "15"
        }]
      }
    },
    methods: {
      say(msg) {
        alert("hello" + " " + msg);
      },
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
 
  a {
    color: #42b983;
  }
</style>
