import Cookies from 'js-cookie'
const cookie = {
  get: function (key) {
    return Cookies.get(key)
  },
  set: function (key, value) {
    return Cookies.set(key, value)
  },
  del: function (key) {
    return Cookies.remove(key)
  }
}

export default cookie
