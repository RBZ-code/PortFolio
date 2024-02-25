import { createStore } from 'vuex'

export default createStore({
  state: {
    isActive: false,
    isDarkMode: false,
  },
  getters: {
  },
  mutations: {
    toggleTheme(state) {
        state.isDarkMode = !state.isDarkMode;
        console.log('clique 2');
      },
  },
  actions: {
  },
  modules: {
  }
})
