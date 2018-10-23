<template>
  <div id="app">
    <el-row type="flex" justify="center"> 
      111
      <router-link to="/hello">Go to hello</router-link>
      <router-link to="/new">Go to new</router-link>
      <router-link to="/home">Go to home</router-link>
      <router-view></router-view>
    </el-row>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
    }
  },
 
  methods:{
   
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
