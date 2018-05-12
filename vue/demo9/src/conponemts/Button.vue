<template>
    <div>
       <hr>
       <span>收到父组件的信息:</span><span v-text="msg"></span><br>
       <input type="text" v-model="msg">
       <a href="https://www.baidu.com">进入百度</a>
    </div>
</template>
<script>
    export default {
        //name:"Button",
        data(){
            return {
                msg:""
            }
        },
        props:{
           
        },
        methods: {  
        },
        //虚拟dom创建之前
        beforeCreate(){
          
            alert("beforeCreate");
        },
        //虚拟dom创建之后
        created(){
              this.msg="hello";
            alert("created");
        },
        //绑定到真实dom之前
        beforeMount(){
            alert("beforeMount");
        },
        //绑定到真实dom之后
        mounted(){
            alert("mounted");
        },
        //虚拟dom发生变化之前
        beforeUpdate(){
            alert("beforeUpdate");
        },
         //虚拟dom发生变化之后
        updated(){
            alert("updated");
        },
        //组件销毁之前
        beforeDestroy(){
            alert("beforeDestroy");
        },
        //组件销毁之后
        destroyed(){
            alert("destroyed");
        }
    }
</script>
<style>

</style>

