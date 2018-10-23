<template>
  <div id="app">
    <button @click="say">单机</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    say(){
      let obj={
         username:"tj",
         password:"123456",
      }
      //第一种
      // for(let key in obj){
      //   console.log(key);
      //   console.log(obj[key]);
      // }
      //第二种
      // Object.entries(obj).forEach((obj,index)=>{
      //   for(let key of obj){
      //     console.log(key);
      //   }
      //   //console.log(index);
      // })
       let array=[1,3,5,7,9];
      // let result=array.filter((value)=>{
      //   if(value>5){
      //     return true;
      //   }
      // });
      // console.log(result);
      // let result=array.map((value)=>{
      //   if(value>5){
      //     return value;
      //   }else{
      //     return 0;
      //   }
      // })
      // console.log(result);
      // let i=0
      // let result=array.reduce((accumulator,currentValue)=>{
      //   console.log(i++);
      //   return accumulator+currentValue;
      // })
      // console.log(result);
      let i=123156;
      let result=i&0x01==1?console.log("是奇数"):console.log("是偶数");
      console.log(result);
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
