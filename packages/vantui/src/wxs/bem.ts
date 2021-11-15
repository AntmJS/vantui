import * as array from './array'
import * as object from './object'
const PREFIX = 'van-'

function join(name: any, mods: any) {
  name = PREFIX + name
  mods = mods.map(function (mod: any) {
    return name + '--' + mod
  })
  mods.unshift(name)
  return mods.join(' ')
}

function traversing(mods: any, conf: any) {
  if (!conf) {
    return
  }

  // 加前缀
  if (typeof conf === 'string' || typeof conf === 'number') {
    mods.push(conf)
  } else if (array.isArray(conf)) {
    // 加前缀
    conf.forEach(function (item: any) {
      traversing(mods, item)
    })
  } else if (typeof conf === 'object') {
    // 加属性
    object.keys(conf).forEach(function (key: any) {
      conf[key] && mods.push(key)
    })
  }
}

function _bem(name: any, conf: any) {
  const mods: any = []
  traversing(mods, conf)
  return join(name, mods)
}

export { _bem }
