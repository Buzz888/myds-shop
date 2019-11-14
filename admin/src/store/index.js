import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    item: [],
    user:null
  },
  mutations: {
    increment(state) {
      if(state.item.length==0){
        state.count = 0
      }
    }
  },
  getters: {
    // ...
    getTodoById: (state) => (id) => {

      let flag = state.item.findIndex(i =>i.id._id === id._id)
      // window.console.log(id)
      if (flag == -1) {
        state.item.push({ id: id, option: 1 })
      } else {
        state.item[flag].option += 1
      }
      state.count = state.item.reduce((total, num) => {
        return total + num.option
      }, 0)

    },
    getuser:(state)=>(data)=>{
      state.user = data
    }
  }
})

export default store
