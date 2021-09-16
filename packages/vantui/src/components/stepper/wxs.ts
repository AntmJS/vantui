import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function buttonStyle(data: any) {
  return style({
    width: addUnit(data.buttonSize),
    height: addUnit(data.buttonSize),
  })
}

function inputStyle(data: any) {
  return style({
    width: addUnit(data.inputWidth),
    height: addUnit(data.buttonSize),
  })
}

export { inputStyle, buttonStyle }
