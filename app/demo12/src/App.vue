<template>
  <div id="app">
    <el-row type="flex" justify="center"> 
      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import First from "./components/First.vue"
import Plus from "./components/Plus.vue"

export default {
  name: 'app',
  data () {
    return {
      msg:'',
      info:'',
      visible:false
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
