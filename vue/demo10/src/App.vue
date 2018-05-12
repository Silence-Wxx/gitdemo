<template>
  <div id="app">
    <p>组建的生命周期</p>
    <input type="text" v-model="msg">
      
    <Button v-if="msg">
      <template slot="A" scoped="msg">
          
      </template>
      <template slot="B">BBBBB</template>
      <template slot="C">CCCCC</template>
    </Button>
  </div>
 
</template>

<script>
  import Button from "./conponemts/Button"
  export default {
    name: 'app',
    data() {
      return {
        msg:"hello world",
        receiveMsg:""
      }
    },
    computed: {
    },
    methods: {
     
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
    text-align: left;
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
