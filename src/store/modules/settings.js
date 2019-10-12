const settings = {
  state: {
    menu: { collapse: false },
    header: { fixed: true }
  },
  mutations: {
    TOGGLE_MENU: state => {
      state.menu.collapse = !state.menu.collapse
    },
    SWITCH_FIXED_HEADER: state => {
      state.header.fixed = !state.header.fixed
    }
  },
  actions: {
    toggleMenu: ({ commit }) => {
      commit('TOGGLE_MENU')
    },
    switchFixedHeader: ({ commit }) => {
      commit('SWITCH_FIXED_HEADER')
    }
  }
}

export default settings
