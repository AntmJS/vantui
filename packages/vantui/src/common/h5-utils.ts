import * as Untils from '../wxs/h5-utils'
import { isPlainObject, isPromise } from './validator'
export { isDef } from './validator'

export const addUnit = Untils.addUnit

export function range(num: any, min: any, max: any) {
  return Math.min(Math.max(num, min), max)
}
export function nextTick(cb: any) {
  setTimeout(() => {
    cb()
  }, 33.333333333333336)
}
let systemInfo: any
export function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = window.navigator.userAgent
  }
  return systemInfo
}

export function requestAnimationFrame(cb: any) {
  return setTimeout(() => {
    cb()
  }, 33.333333333333336)
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

// @ts-ignore
export function getRect(context: any, selector: any) {
  const res = document.getElementById(selector)

  return new Promise((resolve) => {
    resolve(Array.isArray(res) ? res[0] : res)
  })
}

// @ts-ignore
export function getAllRect(context: any, selector: any) {
  const res = document.getElementsByClassName(selector)

  return new Promise((resolve) => {
    resolve(res)
  })
}

export function toPromise(promiseLike: any) {
  if (isPromise(promiseLike)) {
    return promiseLike
  }
  return Promise.resolve(promiseLike)
}
