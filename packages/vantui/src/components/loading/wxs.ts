import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function spinnerStyle(data: any) {
  return style({
    color: data.color,
    width: addUnit(data.size),
    height: addUnit(data.size),
  })
}

function textStyle(data: any) {
  return style({
    'font-size': addUnit(data.textSize),
  })
}

export { spinnerStyle, textStyle }
