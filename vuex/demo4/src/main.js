import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 100,
    price: 100
  },
  mutations: {
    increment (state,amount) {
      //console.log("amount:"+amount);
      state.count+=parseInt(amount);
    },
    increPrice(state,n){
    	state.price+= parseInt(n);
    }
  },
  actions:{
    increAsync({commit},obj){
      setTimeout(()=>{  
        commit('increment',obj.amount);
       },5000);
    },
    wait({commit},obj){
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{  
        commit('increment',obj.amount);
        reject(error);
       },5000);
      })
    }
  },
  getters:{
    grossBenefix:state=>{
      return state.count*state.price;
    }
  }
})
new Vue({
  el: '#app',
  store:store,
  render: h => h(App)
})
