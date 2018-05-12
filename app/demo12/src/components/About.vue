
<template>
    <div>
        <h1>About</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是About组件"
            }
        },
        //挂载之后的钩子函数
        mounted (){
            console.log(this.$route);
            this.msg+=this.$route.params.id;
        }
    }
</script>