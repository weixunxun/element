import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getter"
import mutations from "./mutations"
import actions from "./actions"

import wxxStore from "..modules/wxxStore"
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules:{
    wxxStore

  }

})
