import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"
Vue.use(Vuex);
const store = new Vuex.Store({
  //状态 
  state: {
    count: 100,
    price: 100
  },
  //对状态的操作
  mutations: {
    increment (state,n) {
      state.count+=n;
    },
    increPrice(state,n){
    	state.price+=n;
    }
  },
  //对状态的读取
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
