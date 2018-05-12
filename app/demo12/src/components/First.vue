<template>
	<div>
		<h1>老爸的信息:{{inputValue}}</h1>
		<input type="text"  v-model="msg" @change="onInput()" />
	</div>
</template>

<script >
	export default{
		data(){
			return{
				msg:"aaa"
			}
		},
		props:{
			inputValue:String
		},
		methods:{
			onInput:function(){
				console.log(this.msg);
				this.$emit("message",this.msg);	
			}
		}
	}
</script>
<style >
	.dataStyle{color:red;}
</style>