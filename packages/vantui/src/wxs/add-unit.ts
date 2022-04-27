import { pxTransform } from '@tarojs/taro'

function addUnit(value: any) {
  if (value == null) {
    return undefined
  }

  return /^-?\d+(\.\d+)?$/.test('' + value) ? pxTransform(value) : value
}

export { addUnit }
