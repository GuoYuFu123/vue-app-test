import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import layout from './modules/layout' //框架
const store = new Vuex.Store({
  modules: {
        layout
  }
})

export default store