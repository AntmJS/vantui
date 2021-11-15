import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: any) {
  return style({
    'z-index': data.zIndex,
    top: addUnit(data.top),
  })
}

function notifyStyle(data: any) {
  return style({
    background: data.background,
    color: data.color,
  })
}

export { rootStyle, notifyStyle }
