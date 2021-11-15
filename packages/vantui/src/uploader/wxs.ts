import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function sizeStyle(data: any) {
  return style({
    width: addUnit(data.previewSize),
    height: addUnit(data.previewSize),
  })
}

export { sizeStyle }
