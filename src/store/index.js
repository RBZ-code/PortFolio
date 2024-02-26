import { createStore } from 'vuex'

export default createStore({
  state: {
    isDarkMode: false,
  },
  getters: {
  },
  mutations: {
    toggleTheme(state) {
        state.isDarkMode = !state.isDarkMode;
      },
  },
  actions: {
  },
  modules: {
  }
})
