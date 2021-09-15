import Taro from '@tarojs/taro'

function addUnit(value: any) {
  if (value == null) {
    return undefined
  }

  return /^-?\d+(\.\d+)?$/.test('' + value) ? Taro.pxTransform(value) : value
}

export { addUnit }
