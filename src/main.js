import Vue from 'vue'
import App from './App'
import router from './router'
import '@/router/filter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import store from '@/store'
import echarts from 'echarts'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import '@/assets/css/dd-icon.css'
import i18n from '@/i18n/i18n'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(echarts)
Vue.use(VXETable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
