import Taro from '@tarojs/taro'

export const useNextTick = (fn: () => void) => {
  if (['h5', 'weapp'].includes(process.env.TARO_ENV)) {
    return Taro.nextTick(fn)
  }
  setTimeout(fn, 0)
}
