import { style } from '../wxs/style'

function barStyle(data: any) {
  return style({
    'z-index': data.zIndex,
    'padding-top': data.safeAreaInsetTop ? data.statusBarHeight + 'px' : 0,
  })
}

export { barStyle }
