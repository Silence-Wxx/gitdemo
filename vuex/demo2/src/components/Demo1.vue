<template>
  <div >
    <h1>hello</h1>
    <h3>price:{{price}}</h3>
    <h3>count:{{count}}</h3>
    <input type="button" @click="show"/>
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  name: 'app',
  data() {
    return {
      //count:this.$store.state.count
    }
  },
  computed: mapState({  
    count (state){return state.count},
    price (state) {
      return state.price; 
    }
  }),
  methods:{
    show(){
      console.log(this.count+""+this.price);
    }
  }
}
</script>

<style>

 
</style>
