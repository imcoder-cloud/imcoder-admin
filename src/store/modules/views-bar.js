const viewsBar = {
  state: {
    keepViewsByRefresh: true,
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      let views = state.keepViewsByRefresh ? JSON.parse(sessionStorage.getItem('visitedViews') || '[]') : state.visitedViews
      if (views.some(v => v.path === view.path)) {
        state.visitedViews = views
        return
      }
      let v = {}
      v.title = view.meta.title || '无标题'
      v.path = view.path
      v.fullPath = view.fullPath
      v.name = view.name
      v.meta = view.meta
      views.push(v)
      state.visitedViews = views
      sessionStorage.setItem('visitedViews', JSON.stringify(views))
    },
    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.push(view.name)
      }
    },

    DEL_VISITED_VIEW: (state, view) => {
      let views = state.keepViewsByRefresh ? JSON.parse(sessionStorage.getItem('visitedViews') || '[]') : state.visitedViews
      for (const [i, v] of views.entries()) {
        if (v.path === view.path) {
          views.splice(i, 1)
          state.visitedViews = views
          sessionStorage.setItem('visitedViews', JSON.stringify(views))
          break
        }
      }
    },
    DEL_CACHED_VIEW: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },

    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
      let views = state.keepViewsByRefresh ? JSON.parse(sessionStorage.getItem('visitedViews') || '[]') : state.visitedViews
      const fixedTags = views.filter(tag => tag.meta.affix)
      for (const [i, v] of views.entries()) {
        if (v.path === view.path && !view.meta.affix) {
          views = views.slice(i, i + 1)
          views = [...fixedTags, ...views]
          state.visitedViews = views
          sessionStorage.setItem('visitedViews', JSON.stringify(views))
          break
        }
      }
    },
    DEL_OTHERS_CACHED_VIEWS: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, index + 1)
          break
        }
      }
    },

    DEL_ALL_VISITED_VIEWS: state => {
      const fixedTags = state.visitedViews.filter(tag => tag.meta.affix)
      state.visitedViews = fixedTags
      sessionStorage.setItem('visitedViews', JSON.stringify(fixedTags))
    },
    DEL_ALL_CACHED_VIEWS: state => {
      state.cachedViews = []
    },

    UPDATE_VISITED_VIEW: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }

  },
  actions: {
    addView ({ dispatch }, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    addVisitedView ({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView ({ commit }, view) {
      commit('ADD_CACHED_VIEW', view)
    },

    delView ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view)
        dispatch('delCachedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delVisitedView ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve([...state.visitedViews])
      })
    },
    delCachedView ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_CACHED_VIEW', view)
        resolve([...state.cachedViews])
      })
    },

    delOthersViews ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delOthersVisitedViews', view)
        dispatch('delOthersCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delOthersVisitedViews ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersCachedViews ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_CACHED_VIEWS', view)
        resolve([...state.cachedViews])
      })
    },
    delAllViews ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delAllVisitedViews', view)
        dispatch('delAllCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delAllVisitedViews ({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_VISITED_VIEWS')
        resolve([...state.visitedViews])
      })
    },
    delAllCachedViews ({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_CACHED_VIEWS')
        resolve([...state.cachedViews])
      })
    },

    updateVisitedView ({ commit }, view) {
      commit('UPDATE_VISITED_VIEW', view)
    }
  }
}

export default viewsBar
