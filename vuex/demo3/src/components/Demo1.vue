<template>
  <div >
    <h1>hello</h1>
    <h3>price:{{price}}</h3>
    <h3>count:{{count}}</h3>
    <h3>grossBenefix:{{grossBenefix}}</h3>
    <input type="button" @click="show">显示</input>
    <input type="button" @click="add(1)"> 添加</input>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"

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
    },
    grossBenefix(state){
      return this.$store.getters.grossBenefix;
    }
  }),
  methods:{
    show(){
      console.log(this.count+""+this.price);
      this.add(1);
    },
    ...mapMutations({
      add: 'increment'
    })
  }
}
</script>

<style>

 
</style>
