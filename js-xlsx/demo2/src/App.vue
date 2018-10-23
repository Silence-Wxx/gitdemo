<template>
  <div id="app">
    <div>
      <input type="file" multiple="false" id="sheetjs-input" accept="xls,xlsx" @change="upload" />
    </div>
    <el-table :data="tableData" height="250" border style="width: 100%" id="down" ref="table">
      <el-table-column prop="date" label="日期">
      </el-table-column>
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <el-button type="success" plain @click="download" >下载方式1</el-button>
    <el-button type="success" plain  @click="download2">下载方式2</el-button>
    <button type="button" id="export-table" v-show="table.length>0">根据Json导出Excel</button>
    <br>
    <div id="out-table"></div>
  </div>
</template>

<script>
  import XLSX from 'xlsx';
  import FileSaver from 'file-saver'
  import sheet from "./utils/sheet"

  require("./mock/mock.js");

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        tableData: [],
        table: []
      }
    },
    methods: {
      upload(event) {
        var self=this;
        let map=new Map();
        map.set("date","日期");
        map.set("name","姓名");
        map.set("address","地址");
        sheet.sheetImport(event,map).then(function(data){
          self.tableData=data;
          console.log(self.table)
        },function(err){
          console.log(err);
        })
      },
      download(){
        /* html表格转excel */
        var wb = XLSX.utils.table_to_book(document.getElementById("down"));
        /* 生成文件，导出D盘 */
        XLSX.writeFile(wb, "用户.xlsx");
        /* html表格转excel */ 
      },
      download2(){
        let cols=['日期','姓名','地址'];
        sheet.sheetExport(this.tableData,cols);
      }
    },
    mounted() {
      let tableDataUrl = "/api/tableData";
      this.$http.get(tableDataUrl).then((res) => {
        this.tableData = res.data;
      }, (res) => {
        console.log("error");
      });
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
