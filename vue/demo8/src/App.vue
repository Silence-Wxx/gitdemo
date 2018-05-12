<template>
  <div id="app">
    <p>组件之间的通信</p>
    <hr>
    <span>父组件向子组件发送信息</span>
    <input type="text" v-model="msg"> <br>
    <span>收到子组件的信息:</span><span v-text="receiveMsg"></span> 
    <Button :receiveMsg="msg" @send="get"> </Button>
  </div>
 
</template>

<script>
  import Button from "./conponemts/Button"
  export default {
    name: 'app',
    data() {
      return {
        msg:"",
        receiveMsg:""
      }
    },
    computed: {
    },
    methods: {
      get(info) {
        console.log(info);
        this.receiveMsg=info;
      },
    },
    watch: {
    },
    components: {
      Button: Button,
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
