import router from '@/router/index'

const user = {
  state: {
    user: {},
    role: [],
    routers: router.options.routes,
    dynamicRouters: []
  },

  mutations: {
    GET_USER: (state) => {
      return state.user
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_ROUTER: (state, routers) => {
      state.routers = state.routers.concat(routers)
    },
    GET_DYNAMIC_ROUTER: (state) => {
      return state.dynamicRouters
    },
    SET_DYNAMIC_ROUTER: (state, routers) => {
      state.dynamicRouters = routers
    }
  },

  actions: {
    getUser: ({ commit }) => {
      commit('GET_USER')
    },
    setUser: ({ commit }, user) => {
      commit('SET_USER', user)
    },
    setRouters: ({ commit }, routers) => {
      commit('SET_ROUTER', routers)
    },
    getDynamicRouters: ({ commit }) => {
      commit('GET_DYNAMIC_ROUTER')
    },
    setDynamicRouters: ({ commit }, routers) => {
      commit('SET_DYNAMIC_ROUTER', routers)
    }
  }
}

export default user
