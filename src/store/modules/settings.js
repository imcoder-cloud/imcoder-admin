import commonUtil from '@/utils/commonUtil'
const settings = {
  state: {
    settings: {
      openSetting: commonUtil.getSettingStorage('openSetting'),
      showViewsBar: commonUtil.getSettingStorage('showViewsBar'),
      keepViewsByRefresh: commonUtil.getSettingStorage('keepViewsByRefresh'),
      collapseMenu: commonUtil.getSettingStorage('collapseMenu'),
      showBreadCrumb: commonUtil.getSettingStorage('showBreadCrumb')
    }
  },
  mutations: {
    UPDATE_SETTINGS: (state, { key, value, type }) => {
      if (type && type === 'toggle') {
        state.settings[key] = !state.settings[key]
        localStorage.setItem(key, state.settings[key])
        return
      }
      state.settings[key] = value
      localStorage.setItem(key, value)
    }
  },
  actions: {
    updateSettings: ({ commit }, param) => {
      commit('UPDATE_SETTINGS', param)
    }
  }
}

export default settings
