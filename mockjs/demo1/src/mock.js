const Mock=require("mockjs");
const Random=Mock.Random;
var template=function(){
    let data=[];
    for(let i=0;i<4;i++){
       let object={
        'date':Random.date("yyyy-MM-dd HH:mm:ss"),
        'name':Random.name(),
        'address':Random.city(true)
       }
       data.push(object);
    }
    return data;
}
Mock.mock('/api/data', template);