const commonUtil = {
  getCircularReplacer: function () {
    const seen = new WeakSet()
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return
        }
        seen.add(value)
      }
      return value
    }
  },
  notNull: function (obj) {
    return obj != null && obj != undefined && obj != 'null' && obj != 'undefined' && obj != ''
  },
  isNull: function (obj) {
    return !this.notNull(obj)
  },
  getSettingStorage: function (key) {
    let val = localStorage.getItem(key)
    val = this.notNull(val) ? val : false
    return val == 'true'
  }
}

export default commonUtil
