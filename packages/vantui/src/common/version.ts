import Taro, {
  getSystemInfoSync as TaroGetSystemInfoSync,
  canIUse,
} from '@tarojs/taro'
function compareVersion(v1: any, v2: any) {
  v1 = v1.split('.')
  v2 = v2.split('.')
  const len = Math.max(v1.length, v2.length)
  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }
  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10)
    const num2 = parseInt(v2[i], 10)
    if (num1 > num2) {
      return 1
    }
    if (num1 < num2) {
      return -1
    }
  }
  return 0
}
let systemInfo: any
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = TaroGetSystemInfoSync()
  }
  return systemInfo
}
function gte(version: any) {
  const system = getSystemInfoSync()
  return compareVersion(system.SDKVersion || system.version, version) >= 0
}
export function canIUseModel() {
  return gte('2.9.3')
}
export function canIUseFormFieldButton() {
  return gte('2.10.3')
}
export function canIUseAnimate() {
  return gte('2.9.0')
}
export function canIUseGroupSetData() {
  return gte('2.4.0')
}
export function canIUseNextTick() {
  return canIUse('nextTick')
}
export function canIUseCanvas2d() {
  return gte('2.9.0')
}
export function canIUseGetUserProfile() {
  return !!Taro.getUserProfile
}
