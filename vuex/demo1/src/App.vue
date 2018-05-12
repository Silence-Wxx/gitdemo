<template>
  <div id="app">
    <input type="button" @click="inc">点我</input>
    <demo1></demo1>
  </div>
</template>

<script>
import demo1 from "./components/Demo1.vue"
export default {
  name: 'app',

  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    demo1:demo1
  },
  methods:{
    inc(){
      this.$store.commit('increment',10);
      console.log(this.$store.state.count);
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
