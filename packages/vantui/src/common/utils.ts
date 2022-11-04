import Taro, {
  getSystemInfoSync as TaroGetSystemInfoSync,
  createSelectorQuery,
} from '@tarojs/taro'
import * as raf from 'raf'
import { isDef, isPlainObject, isPromise } from './validator'
import { canIUseNextTick } from './version'

export { isDef } from './validator'
export function range(num: any, min: any, max: any) {
  return Math.min(Math.max(num, min), max)
}
export function nextTick(cb: any) {
  if (canIUseNextTick()) {
    Taro.nextTick(cb)
  } else {
    setTimeout(() => {
      cb()
    }, 33.333333333333336)
  }
}
let systemInfo: any
export function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = TaroGetSystemInfoSync()
  }
  return systemInfo
}

let menuInfo: any
export function getMenuButtonBoundingClientRect() {
  if (menuInfo == null) {
    menuInfo = Taro.getMenuButtonBoundingClientRect()
  }
  return menuInfo
}

export function addUnit(value: any) {
  if (!isDef(value)) {
    return undefined
  }
  return /^-?\d+(\.\d+)?$/.test('' + value) ? Taro.pxTransform(value) : value
}
export function requestAnimationFrame(cb: any) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb)
  }

  return raf.default(cb)
}
export function pickExclude(obj: any, keys: any) {
  if (!isPlainObject(obj)) {
    return {}
  }
  return Object.keys(obj).reduce((prev: any, key) => {
    if (!keys.includes(key)) {
      prev[key] = obj[key]
    }
    return prev
  }, {})
}
export function getRect(context: any, selector: any) {
  return new Promise((resolve) => {
    let query = createSelectorQuery()
    if (context) {
      query = query.in(context)
    }
    query
      .select(selector)
      .boundingClientRect()
      .exec((rect: any = []) => {
        return resolve(rect[0])
      })
  })
}
export function getAllRect(context: any, selector: any) {
  return new Promise((resolve) => {
    let query = createSelectorQuery()
    if (context) {
      query = query.in(context)
    }
    query
      .selectAll(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]))
  })
}
export function toPromise(promiseLike: any) {
  if (isPromise(promiseLike)) {
    return promiseLike
  }
  return Promise.resolve(promiseLike)
}
export function getCurrentPage() {
  const pages = Taro.getCurrentPages()
  return pages[pages.length - 1]
}
