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
    increment (state,n) {
      state.count+=n;
    },
    increPrice(state,n){
    	state.price+=n;
    }
  }
})
new Vue({
  el: '#app',
  store:store,
  render: h => h(App)
})
