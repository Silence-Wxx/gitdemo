import XLSX from 'xlsx';
import FileSaver from 'file-saver'
let s2ab=function(s) {
    if (typeof ArrayBuffer !== 'undefined') {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    } else {
        var buf = new Array(s.length);
        for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
}
let translateJson=function(json,map){
    for(let [newkey,oldkey] of map.entries()){
        json[newkey]=json[oldkey];
        delete json[oldkey];
    }
}
let translateJsonArray=function(jsonArray,map){
   jsonArray.map(element=>{
        translateJson (element,map);
   }) 
}
export default{
    'translateJson':translateJson,
    'translateJsonArray':translateJsonArray,
    'sheetImport' : function(even,map){
        var selt=this;
        let files=event.target.files;
        let file=files[0];
        console.log(file);
        let reader=new FileReader();
        var promise=new Promise(function(resolve,reject){
            reader.onload = function (e) {
                // 数据预处理
                var binary = "";
                var bytes = new Uint8Array(e.target.result);
                var length = bytes.byteLength;
                for (var i = 0; i < length; i++) {
                  binary += String.fromCharCode(bytes[i]);
                }
          
                /* 读取 workbook */
                var wb = XLSX.read(binary, {
                  type: 'binary'
                });
          
                /* 选择第一个sheet */
                var wsname = wb.SheetNames[0];
                console.log(wsname);
                var ws = wb.Sheets[wsname];
          
              
                var data= XLSX.utils.sheet_to_json(ws);
                translateJsonArray(data,map);
                resolve(data);
            }
            reader.readAsArrayBuffer(file);
        })
        return promise;
    },
    sheetExport:function(jsonData,colName,sheetName="sheet1"){
        const wopts = { bookType: 'xlsx', bookSST: false, type: 'binary' };
        const wb = { SheetNames: [sheetName], Sheets: {}, Props: {} };
        wb.Sheets[sheetName] = XLSX.utils.json_to_sheet(jsonData);//通过json_to_sheet转成单页(Sheet)数据
        let worksheet=wb.Sheets[sheetName];
        for(let i=0;i<colName.length;i++){
            let col=(i > 25 ? getCharCol(i) : String.fromCharCode(65 + i))+(1);
            console.log(col);
            worksheet[col].v=colName[i];
        }
        FileSaver.saveAs(new Blob([s2ab(XLSX.write(wb, wopts))], { type: "application/octet-stream" }), "这里是下载的文件名" + '.' + (wopts.bookType=="biff2"?"xls":wopts.bookType));
    },
    getCharCol:function(n) {
        let temCol = '',
        s = '',
        m = 0
        while (n > 0) {
            m = n % 26 + 1
            s = String.fromCharCode(m + 64) + s
            n = (n - m) / 26
        }
        return s
    },
    //将字符串转换为2进制流
    s2ab:s2ab
}
