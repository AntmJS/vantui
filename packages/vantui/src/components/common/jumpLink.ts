import Taro from '@tarojs/taro'
export function jumpLink(
  linkType: 'navigateTo' | 'reLaunch' | 'redirectTo',
  url: string,
) {
  if (url) {
    if (linkType === 'navigateTo' && Taro.getCurrentPages().length > 9) {
      Taro.redirectTo({ url })
    } else {
      switch (linkType) {
        case 'navigateTo':
          Taro.navigateTo({ url })
          break
        case 'reLaunch':
          Taro.reLaunch({ url })
          break
        case 'redirectTo':
          Taro.redirectTo({ url })
      }
    }
  }
}
