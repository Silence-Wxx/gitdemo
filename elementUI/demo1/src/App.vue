<template>
  <div id="app">
    <div>
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期"
        value-format="yyyy/MM/dd"
        >
      </el-date-picker>
    </div>
     <div class="ao" >
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期"
        value-format="yyyy/MM/dd">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      date: '2018/5/16'
    }
  }
}
</script>

<style>
.ao .el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: 130px;
}

.ao .el-input__inner{
  width: 130px;
  padding-right: 0px;
}
.ao{
  width: 180px;
  
}
*{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 0px;
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
