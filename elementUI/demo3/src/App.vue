<template>
  <div id="app">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <el-table :data="girls" style="width: 100%">
      <el-table-column prop="id" label="id" width="180">
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="180">
      </el-table-column>
      <el-table-column prop="degree" label="学分">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        tableData: [{
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        girls:[]
      }
    
    },
    mounted(){
      let girlUrl="http://localhost:8082/findAll";
      this.$http.post(girlUrl,{},{headers:{'Content-Type':'application/json'}}).then((res)=>{
        console.log("请求女生");
        this.girls=res.data;
      },(res)=>{
        console.log("error");
      });
     }
  }
</script>

<style>
  .tj input {
    padding-left: 5px;
  }
  .tj .el-input__inner {
    padding: 0px 10px;
    width: 100px;
    height: 20px;
  }
  .tj ul {
    width: 50px;
  }
  .tj li .el-select-dropdown__item {
    font-size: 8px;
    width: 50px;
    height: 20px;
  }
  * {
    margin: 0;
  }
</style>
