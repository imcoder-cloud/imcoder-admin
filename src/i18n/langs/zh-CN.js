import zhLocale from 'element-ui/lib/locale/lang/zh-CN' // 引入element语言包
const cn = {
  message: {
    settings: {
      TITLE: '系统设置',
      OPEN_VIEWS_BAR_TEXT: '开启视图页签',
      VIEWS_BAR_SYTLE_TEXT: '视图页签样式',
      VIEWS_BAR_SYTLE_TAB_TEXT: '选项卡',
      VIEWS_BAR_SYTLE_TAG_TEXT: '标签',
      KEEP_VIEWS_AFTER_REFRESH_TEXT: '刷新保留其他视图',
      COLLAPSE_MENU_BAR_TEXT: '收缩菜单栏',
      UNIQUE_OPENED_TEXT: '保持一个子菜单展开',
      OPEN_BREAD_CRUMB_TEXT: '开启面包屑'
    },
    navBar: {
      MESSAGE_TEXT: '消息',
      NOTE_TEXT: '便签',
      SHARE_TEXT: '分享',
      FULL_SCREEN_TEXT: '全屏',
      CANCEL_FULL_SCREEN_TEXT: '取消全屏',
      SETTINGS_TEXT: '系统设置',
      BASIC_INFO_TEXT: '基本信息',
      ABOUT_TEXT: '关于我们',
      LOGOUT_TEXT: '退出登录'
    }
  },
  ...zhLocale
}

export default cn
