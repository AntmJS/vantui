// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(val: any) {
  return typeof val === 'function'
}
export function isPlainObject(val: any) {
  return val !== null && typeof val === 'object' && !Array.isArray(val)
}
export function isPromise(val: any) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch)
}
export function isDef(value: any) {
  return value !== undefined && value !== null
}
export function isObj(x: any) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}
export function isNumber(value: any) {
  return /^\d+(\.\d+)?$/.test(value)
}
export function isBoolean(value: any) {
  return typeof value === 'boolean'
}
const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i
const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i
export function isImageUrl(url: any) {
  return IMAGE_REGEXP.test(url)
}
export function isVideoUrl(url: any) {
  return VIDEO_REGEXP.test(url)
}
