<template>
  <div id="app">
    <p>使用计算属性</p>
    <ul>
      <li v-for="(item,index) in arrayfilter" :key="index">{{item}}</li>
    </ul>
    <hr>
    <p>使用watch进行同步</p>
    <input type="text" v-model="msg"><br>
    <span>msg的值为：<span v-text="msg"></span></span><br>
    <span>你变我也变: <span v-text="msg1"></span></span><br>
    <hr>
    <p>使用computed进行同步</p>
    <span>你变我也变: <span v-text="msg2"></span></span><br>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        msg:"",
        msg1:""
      }
    },
    computed: {
      arrayfilter() {
        return this.array.filter((item)=>{
          return item % 2 == 0;
        })
      },
      msg2(){
        return this.msg;
      }
    },
    methods: {
      say(msg) {
        alert("hello" + " " + msg);
      },
    },
    watch:{
      msg:function(newVal,oldVal){
        this.msg1=newVal;
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
  a {
    color: #42b983;
  }
</style>
