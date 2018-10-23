var config={
    state: {
      user:{
          username:""
      }
    },
    mutations: {
      userLogin(state,user){
          
          state.user=user;
          console.log(user);
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
  }
  export  default config;