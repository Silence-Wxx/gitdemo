<template>
  <div id="app">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址" width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  require("./mock.js");
  export default {
    name: 'app',
    data() {
      return {
        tableData:[]
      }
    },
    mounted(){
      let url="/api/data";
      this.$http.get(url).then(response=>{
        console.log("获取的数据为");
        console.log(response.data);
        this.tableData=response.data;
        console.log(this.tableData);
      },response=>{
        console.log("fail");
      });
      // let url2="http://localhost:8081/girl/hello";
      // this.$http.get(url2).then(response=>{
      //    console.log('hello');
      //   console.log(response);
      // },response=>{
      //   console.log("fail");
      // });
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
