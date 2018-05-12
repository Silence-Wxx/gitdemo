<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>我是老爸</h1>
    <h1>儿子的信息：{{info}}</h1>
    <input type="text" v-model.lazy="msg" />
    <hr />
    <h1>我是儿子</h1>
    <first :inputValue="msg" @message="receiveMessage"></first>
  </div>
</template>

<script>
import First from "./components/first.vue"
export default {
  name: 'app',
  data () {
    return {
      msg:'',
      info:''
    }
  },
  components:{first:First},
  methods:{
    receiveMessage:function(text){
        this.info=text;
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
