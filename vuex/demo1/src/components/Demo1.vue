<template>
  <div >
    <h1>hello</h1>
    <h3>price:{{price}}</h3>
    <h3>count:{{count1}}</h3>
    <input type="button" @click="show"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      count:this.$store.state.count
    }
  },
  computed:{
    count1(){
      return this.$store.state.count;
    },
    price(){
      return this.$store.state.price;
    }
  },
  methods:{
    show(){
      console.log(this.count1+""+this.price);
    }
  }
}
</script>

<style>

 
</style>
