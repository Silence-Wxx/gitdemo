<template>
  <div id="app">
    <v-contextmenu ref="contextmenu" @contextmenu="sayHello">
      <v-contextmenu-item>菜单1</v-contextmenu-item>
      <v-contextmenu-item>菜单2</v-contextmenu-item>
      <v-contextmenu-item>菜单3</v-contextmenu-item>
    </v-contextmenu>
    <div v-contextmenu:contextmenu>右键点击此区域</div>
    <div>
      <el-table :data="tableData" style="width: 100%" >
        <el-table-column prop="date" label="日期" width="180">
          <template scope="scope"  >
            <el-input  v-model="scope.row.date" v-contextmenu:contextmenu ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180">
          <template scope="scope"  >
            <el-input  v-model="scope.row.name" ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址">
          <template scope="scope"  >
            <el-input  v-model="scope.row.address" ></el-input>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
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
        }]
      }
    },
    methods: {
      say(vm,scope) {
        console.log(vm);
      },
      sayHello(vnode) {
        console.log(vnode);
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
