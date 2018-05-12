<template>
    <div>
       <hr>
       <span>收到父组件的信息:</span><span v-text="receiveMsg"></span><br>
       <span><input type="text" v-model="msg" @keypress.enter="sendInfo()"></span>
    </div>
</template>
<script>
    export default {
        name:"Button",
        data(){
            return {
                msg:""
            }
        },
        props:{
            receiveMsg:String
        },
        methods: {
            sendInfo() {
                console.log(this.msg);
                this.$emit("send",this.msg);
            }
        }
    }
</script>
<style>

</style>

