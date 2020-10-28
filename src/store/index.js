import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView'
import decorate from './modules/decorate'
import theme from './modules/theme'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    tagsView,
    user,
    decorate,
    user,
    theme
  },
  getters
})

export default store
