<template>
    <div>
       <hr>
       <slot name="A">
          <input type="text" v-model="msg">
          
        </slot>
       <h2><slot name="B"></slot></h2>
       <h3><slot name="C"></slot></h3>
    </div>
</template>
<script>
    export default {
        //name:"Button",
        data(){
            return {
                
            }
        },
        props:{
           
        },
        methods: {  
        }
        
    }
</script>
<style>

</style>

