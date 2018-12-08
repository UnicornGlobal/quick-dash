export default {
  state: {
    customObject: {}
  },
  mutations: {
    setCustomObject(state, customObject) {
      state.customObject = customObject
    }
  },
  getters: {
    customObject(state, _getters) {
      return state.customObject
    }
  }
}
