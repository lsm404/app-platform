import { login, dingCodeLogin, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import baseAvatar from '@/assets/yqt-logo.png'

import { list } from '@/api/getRouter'
import Layout from '@/layout'
import router from '@/router'
import menu from '@/router'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  rout: ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROUT: (state, rout) => {
    console.log(menu,"menu")
    state.rout = null
    state.rout = rout
    state.rout.map(item => {
      item.path = `${item.path}`
      item.component = Layout
      item.children.map(child => {
        const path = child.component
        if (child.children) {
          // console.log(child.children, 11)
          child.children.map(childer => {
            if (childer.children) {
              // console.log(childer.children, 11)
              childer.children.map(sunsun => {
                const path = sunsun.component
                // console.log(path)
                sunsun.component = resolve => require([`@/views/${path}.vue`], resolve)
              })
            }
            const path = childer.component
            // console.log(path)
            childer.component = resolve => require([`@/views/${path}.vue`], resolve)
          })
        }
        child.component = resolve => require([`@/views/${path}.vue`], resolve)
        // child.component = () => import('@/views/login/index.vue')
      })
    })
    router.options.routes = state.rout.slice(0)
    const routes = state.rout.slice(0)
    state.rout=routes
    console.log(state.rout,"state.rout")
    // router.addRoutes(routes)
  }
}

const actions = {
  // 用户登录
  async login({ commit }, userInfo) {
    // const { mobile, password } = userInfo
    try {
      const res = await login(userInfo)
      if (res.code === 200) {
        commit('SET_TOKEN', res.data.token)
        setToken(res.data.token)
      }
    } catch (e) {
      // TODO handle the exception
    }
  },

  // 钉钉授权登录
  async dingToLogin({ commit }, code) {
    console.log(code)
    try {
      const res = await dingCodeLogin(code)
      if (res.code === 200) {
        commit('SET_TOKEN', res.data.token)
        setToken(res.data.token)
      }
    } catch (e) {
      // TODO handle the exception
    }
  },

  // 获取用户信息
  async getInfo({ commit, state }) {
    try {
      const res = await getInfo()
      if (res.code === 200) {
        const { name, nickname, avatar } = res.data
        commit('SET_NAME', name || (nickname || '壹企通'))
        commit('SET_AVATAR', avatar || baseAvatar)
      }
    } catch (e) {
      // TODO handle the exception
    }
  },
  getRouter({ commit, state }) {
    list().then(data => {
      const routes = data.data.items
      commit('SET_ROUT', routes)
    })
  },
  // 退出登录
  async logout({ commit, state }) {
    try {
      const res = await logout()
      if (res.code === 200) {
        commit('SET_TOKEN', '')
        removeToken()
        resetRouter()
      }
    } catch (e) {
      // TODO handle the exception
    }
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
