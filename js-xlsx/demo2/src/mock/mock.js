const Mock=require("mockjs");
const Random=Mock.Random;
let tableData=function(){
    let data=[];
    for(let i=0;i<10;i++){
        let obj={
            'date':Random.date("yyyy-MM-dd HH:mm:ss"),
            'name':Random.name(),
            'address':Random.city(true)
        }
        data.push(obj);
    }
    return data;
}
Mock.mock('/api/tableData',tableData);