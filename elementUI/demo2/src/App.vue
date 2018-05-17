<template>
  <div id="app">
    <div class="tj">
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-row>
      <el-col :span="10">
        <el-input v-model="value"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
         options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>

<style>
  .tj input{
    padding-left: 5px;
  }
  .tj .el-input__inner{
    padding: 0px 10px;
    width:100px;
    height: 20px;
  }
  .tj  ul{
    width:50px;
  }
  .tj li .el-select-dropdown__item{
    font-size: 8px;
     width:50px;
     height: 20px;
   }
  * {
    margin: 0;
  }
  
  
</style>
