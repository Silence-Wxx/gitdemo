<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>我是老爸</h1>
    <h1>儿子的信息：{{info}}</h1>
    <input type="text" v-model.lazy="msg" />
    <hr />
    <h1>我是儿子</h1>
    <first :inputValue="msg" @message="receiveMessage"></first>
    <router-link to="/Home">首页</router-link>
    <router-link to="/About/123">帮助</router-link>
    <button @click="goto()">点我也可以跳转</button>
    <hr />
    <plus></plus>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import First from "./components/first.vue"
import Plus from "./components/Plus.vue"

export default {
  name: 'app',
  data () {
    return {
      msg:'',
      info:''
    }
  },
  components:{
    first:First,
    plus:Plus
  },
  methods:{
    receiveMessage:function(text){
        this.info=text;
    },
    goto:function(){
      this.$router.push({path:"/About/456",query:{id:"567"}});
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

h1, h2 {
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
