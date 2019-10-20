import commonUtil from '@/utils/commonUtil'
const viewsBar = {
  state: {
    keepViewsByRefresh: commonUtil.getSettingStorage('keepViewsByRefresh'),
    visitedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      let views = state.keepViewsByRefresh ? JSON.parse(sessionStorage.getItem('visitedViews') || '[]') : state.visitedViews
      if (views.some(v => v.path === view.path)) {
        state.visitedViews = views
        return
      }
      let v = {}
      v.name = view.name || '无标题'
      v.path = view.path
      v.fullPath = view.fullPath
      v.fixed = view.fixed
      views.push(v)
      state.visitedViews = views
      sessionStorage.setItem('visitedViews', JSON.stringify(views))
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

    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
      let views = state.keepViewsByRefresh ? JSON.parse(sessionStorage.getItem('visitedViews') || '[]') : state.visitedViews
      const fixedTags = views.filter(tag => tag.fixed)
      for (const [i, v] of views.entries()) {
        if (v.path === view.path && !view.fixed) {
          views = views.slice(i, i + 1)
          views = [...fixedTags, ...views]
          state.visitedViews = views
          sessionStorage.setItem('visitedViews', JSON.stringify(views))
          break
        }
      }
    },

    DEL_ALL_VISITED_VIEWS: state => {
      const fixedTags = state.visitedViews.filter(tag => tag.fixed)
      state.visitedViews = fixedTags
      sessionStorage.setItem('visitedViews', JSON.stringify(fixedTags))
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
    },
    addVisitedView ({ commit }, view) {
      commit('ADD_VISITED_VIEW', view)
    },

    delView ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view)
        resolve({
          visitedViews: [...state.visitedViews]
        })
      })
    },
    delVisitedView ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve([...state.visitedViews])
      })
    },

    delOthersViews ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delOthersVisitedViews', view)
        resolve({
          visitedViews: [...state.visitedViews]
        })
      })
    },
    delOthersVisitedViews ({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delAllViews ({ dispatch, state }, view) {
      return new Promise(resolve => {
        dispatch('delAllVisitedViews', view)
        resolve({
          visitedViews: [...state.visitedViews]
        })
      })
    },
    delAllVisitedViews ({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_VISITED_VIEWS')
        resolve([...state.visitedViews])
      })
    },
    updateVisitedView ({ commit }, view) {
      commit('UPDATE_VISITED_VIEW', view)
    }
  }
}

export default viewsBar
