import { createStore } from 'vuex'

export default createStore({
  state: {
    token: localStorage.getItem('jwtapptoken') || null
  },
  mutations: {
    setToken (state, token) {
      state.token = token;
    }
  },
  getters: {
    isLoggedIn (state) {
      return !!state.token;
    },
    getToken (state) {
      return state.token;
    }
  },
  actions: {},
  modules: {}
})
