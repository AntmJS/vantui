import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function wrapStyle(data: any) {
  return style({
    transform: data.transform
      ? 'translate3d(0, ' + data.transform + 'px, 0)'
      : '',
    top: data.fixed ? addUnit(data.offsetTop) : '',
    'z-index': data.zIndex,
  })
}

function containerStyle(data: any) {
  return style({
    height: data.fixed ? addUnit(data.height) : '',
    'z-index': data.zIndex,
  })
}

export { wrapStyle, containerStyle }
