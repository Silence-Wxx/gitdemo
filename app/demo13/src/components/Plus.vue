<template>
    <div>
        第一个数<input type="text" v-model="plus.one"><br>
        第二个数<input type="text" v-model="plus.two"><br>
        计算得：<input type="button" @click="compute"> {{plus.sum}}
        
    </div>
</template>
<script>
    export default {
        data () {
            return {
                plus:{one:"",two:"",sum:""}
            }
        },
        //挂载之后的钩子函数
        mounted (){
            console.log(this.$route);
            this.msg+=this.$route.params.id;
        },
        methods:{
            compute:function(){
                var url="http://localhost:8081/girl/plus"
                this.$http.post(url,this.plus,{headers:{'Content-Type': 'application/json'}}).then((response)=>{
                  this.plus.sum=response.body;
                },(response)=>{
                    console.log(response);
                });
            }
        }
    }
</script>