import { getCurrentPages, redirectTo, reLaunch, navigateTo } from '@tarojs/taro'
export function jumpLink(
  url: string,
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo',
) {
  linkType = linkType ?? 'navigateTo'
  if (url) {
    if (linkType === 'navigateTo' && getCurrentPages().length > 9) {
      redirectTo({ url })
    } else {
      switch (linkType) {
        case 'navigateTo':
          navigateTo({ url })
          break
        case 'reLaunch':
          reLaunch({ url })
          break
        case 'redirectTo':
          redirectTo({ url })
      }
    }
  }
}
