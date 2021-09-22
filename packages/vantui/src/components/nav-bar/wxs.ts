import { style } from '../wxs/style'

function barStyle(data: any) {
  return style({
    'z-index': data.zIndex,
    'padding-top': data.fromTop + 'px',
    height: data.height + 'px',
  })
}

export { barStyle }
