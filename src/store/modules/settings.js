import commonUtil from '@/utils/commonUtil'
const settings = {
  state: {
    settings: {
      lang: localStorage.getItem('lang') || 'zh-CN',
      openSetting: commonUtil.getSettingStorage('openSetting'),
      showViewsBar: commonUtil.getSettingStorage('showViewsBar'),
      viewBarType: localStorage.getItem('viewBarType') || 'tab',
      keepViewsByRefresh: commonUtil.getSettingStorage('keepViewsByRefresh'),
      collapseMenu: commonUtil.getSettingStorage('collapseMenu'),
      uniqueOpened: commonUtil.getSettingStorage('uniqueOpened'),
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
