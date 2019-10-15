import config from '@/config'
const auth = {
  // token
  getToken: function () {
    return sessionStorage.getItem(config.TOKEN_KEY)
  },
  setToken: function (token) {
    return sessionStorage.setItem(config.TOKEN_KEY, token)
  },
  delToken: function () {
    return sessionStorage.setItem(config.TOKEN_KEY, null)
  },

  // 路由
  getRouters: function () {
    let routers = sessionStorage.get(config.ROUTER_KEY)
    return JSON.parse(routers || '[]')
  },
  setRouters: function (routers) {
    return sessionStorage.set(config.ROUTER_KEY, JSON.stringify(routers))
  },
  getDynamicRouters: function () {
    let routers = sessionStorage.getItem(config.DYNAMIC_ROUTER_KEY)
    return JSON.parse(routers || '[]')
  },
  setDynamicRouters: function (routers) {
    return sessionStorage.setItem(config.DYNAMIC_ROUTER_KEY, JSON.stringify(routers))
  },
  delRouters: function () {
    return sessionStorage.setItem(config.ROUTER_KEY, null)
  }
}

export default auth
