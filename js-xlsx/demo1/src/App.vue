<template>
  <div id="app">
    <button @click="downloadExcel" value="点我下载">点我下载</button><br>
    <input type="file" @change="readXlsx($event)">
  </div>
</template>

<script>
  // xlsx 导出插件
  import XLSX from 'xlsx'
  import XLSX_SAVE from 'file-saver'
  // xlsx 文件输出操作方法
  function s2ab(s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i !== s.length; ++i) {
      view[i] = s.charCodeAt(i) & 0xFF;
    }
    return buf;
  }
  export default {
    name: 'app',
    data() {
      return {
        msg: [
          ['cols1', 'cols2', 'cols3'],
          ['data1', 'data2', 'data3']
        ]
      }
    },
    methods: {
      readXlsx(event) {
        console.log(event.target.files);
        var files = event.target.files;
        var fileReader = new FileReader();
        fileReader.onload = function(ev) {
          try {
            var data = ev.target.result,
              workbook = XLSX.read(data, {
                type: 'binary'
              }), // 以二进制流方式读取得到整份excel表格对象
              persons = []; // 存储获取到的数据
          } catch (e) {
            console.log('文件类型不正确');
            return;
          }
          // 表格的表格范围，可用于判断表头是否数量是否正确
          var fromTo = '';
          // 遍历每张表读取
          for (var sheet in workbook.Sheets) {
            if (workbook.Sheets.hasOwnProperty(sheet)) {
              fromTo = workbook.Sheets[sheet]['!ref'];
              console.log(fromTo);
              persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
              // break; // 如果只取第一张表，就取消注释这行
            }
          }
          console.log(persons);
        };
        // 以二进制方式打开文件
        fileReader.readAsBinaryString(files[0]);
      },
      downloadExcel() {
        const ws = XLSX.utils.aoa_to_sheet(this.msg);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
        // save
        const wbout = XLSX.write(wb, {
          type: "binary",
          bookType: "xlsx"
        })
        XLSX_SAVE.saveAs(new Blob([s2ab(wbout)], {
          type: "application/octet-stream"
        }), "exampleExcel.xlsx");
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
