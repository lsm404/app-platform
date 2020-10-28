const state = {
  cubeIndex: ''
}

const mutations = {
  SET_INDEX: (state, index) => {
    state.cubeIndex = index
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
