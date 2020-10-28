const state = {
  variables: {
    status:1,
    menuBg: '#8CA0D1', // 菜单整体背景
  }
}

const mutations = {
  getVariables(state, variables) {
    state.variables = variables
    console.log(state.variables)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
