import Vue from 'vue'

require('es6-promise').polyfill()
import '@babel/polyfill'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import Layout from '@/layout'

import '@/icons' // icon
import '@/permission' // permission control
import '@/styles/normalize.css'
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'develop') {
  mockXHR()
}

// set ElementUI lang to EN
Vue.use(ElementUI, {
  size: 'mini'
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  Layout,
  render: h => h(App)
})
