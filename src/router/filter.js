import router from './index'
import Auth from '@/auth'
import Config from '@/config/index'
import store from '@/store'
import commonUtil from '@/utils/commonUtil'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 模拟用户数据 仅作测试使用
import User from '@/json/user'

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (commonUtil.notNull(Auth.getToken())) { // 判断是否登录
    if (store.state.user.dynamicRouters.length === 0) {
      addRouter(next, to)
    } else {
      next()
    }
  } else {
    if (Config.ROUTER_WHITE_LIST.indexOf(to.path) > -1) { // 判断是否在白名单中
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

export const addRouter = (next, to) => {
  let routers = Auth.getDynamicRouters()
  if (routers.length === 0) { // 本地无存储
    routers = User.routers
    Auth.setDynamicRouters(routers)
  }
  store.dispatch('setDynamicRouters', User.routers)
  router.addRoutes(convertRouter(routers))
  next({ ...to, replace: true })
}

export const convertRouter = (routers) => { // 将路由字符串转换为组件对象
  const rtnRouters = routers.filter(router => {
    if (router.component) {
      const component = router.component
      router.component = loadComponent(component)
    }
    if (router.children && router.children.length) {
      router.children = convertRouter(router.children)
    }
    return true
  })
  return rtnRouters
}

export const loadComponent = (viewPath) => {
  return () => import('@/views/' + viewPath)
}
