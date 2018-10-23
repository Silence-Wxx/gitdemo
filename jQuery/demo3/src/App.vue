<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template scope="scope">
          <div @contextmenu.prevent="showMenu(scope)"  >
            <el-input  v-model="scope.row.date"></el-input>
            <vue-context-menu 
            :contextMenuData="contextMenuData"
            @fillFront="fillFront(scope)"
            @fillBehind="fillBehind()" style="width: 170px;">
            </vue-context-menu>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
        <template scope="scope">
          <div @contextmenu.prevent="showMenu(scope)"  >
            <el-input  v-model="scope.row.name"></el-input>
            <vue-context-menu 
            :contextMenuData="contextMenuData"
            @fillFront="fillFront"
            @fillBehind="fillBehind" style="width: 170px;">
            </vue-context-menu>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="地址">
        <template scope="scope">
           <div @contextmenu.prevent="showMenu(scope)"  >
            <el-input  v-model="scope.row.address"></el-input>
            <vue-context-menu 
            :contextMenuData="contextMenuData"
            @fillFront="fillFront"
            @fillBehind="fillBehind" style="width: 170px;">
            </vue-context-menu>
          </div>
        </template>
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
        }],
        transferIndex:null,
        // contextmenu data (菜单数据)
        contextMenuData: {
          // the contextmenu name(@1.4.1 updated)
          menuName: 'demo',
          // The coordinates of the display(菜单显示的位置)
          axios: {
            x: null,
            y: null
          },
          // Menu options (菜单选项)
          menulists: [{
              fnHandler: 'fillFront', // Binding events(绑定事件)
              btnName: '填充前面' // The name of the menu option (菜单名称)
            },
            {
              fnHandler: 'fillBehind',
              btnName: '填充后面'
            }]
        }
      }
    },
    methods: {
      showMenu(scope) {
        console.log(scope);
        console.log(scope.row[scope.column.property]);
        this.transferIndex = scope;
        var x = event.clientX;
        var y = event.clientY;
        // Get the current location
        this.contextMenuData.axios = {
          x,
          y
        }
      },
      fillFront() {
        let rowIndex=this.transferIndex.$index;
        let columnName=this.transferIndex.column.property;
        let value=this.transferIndex.row[columnName];
        for(let i=0;i<rowIndex;i++){
          this.tableData[i][columnName]=value;
        }
      },
      fillBehind() {
        let rowIndex=this.transferIndex.$index;
        let columnName=this.transferIndex.column.property;
        let value=this.transferIndex.row[columnName];
        for(let i=rowIndex+1;i< this.tableData.length;i++){
          this.tableData[i][columnName]=value;
        }
      },
      say() {
        let obj = {
          username: "tj",
          password: "123456",
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
        let array = [1, 3, 5, 7, 9];
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
        let i = 123156;
        let result = i & 0x01 == 1 ? console.log("是奇数") : console.log("是偶数");
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
