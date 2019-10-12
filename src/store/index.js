import Vue from 'vue'
import Vuex from 'vuex'
import settings from './modules/settings'
import viewsBar from './modules/views-bar'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings, viewsBar
  },
  getters
})

export default store
