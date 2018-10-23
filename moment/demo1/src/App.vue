<template>
  <div id="app">
    <button @click="say">单机</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    say(){
      //获取当前时间
      console.log(moment().format());
      //格式化
      console.log(moment().format("YYYY/MM/DD hh:mm:ss"));
      //时间比较 找出最大值
      let dateArray=["2013/4/12","2013/5/12","2016/4/10","2012/4/12"];
      let dates=dateArray.map(item=>{
        return moment(item);
      });
      var maxMoment=moment.max(dates);
      var minMoment=moment.min(dates);
      console.log(maxMoment.year());
      console.log(maxMoment.year()-minMoment.year());
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
