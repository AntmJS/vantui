import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function sizeStyle(data: any) {
  return 'Array' === data.previewSize.constructor
    ? style({
        width: addUnit(data.previewSize[0]),
        height: addUnit(data.previewSize[1]),
      })
    : style({
        width: addUnit(data.previewSize),
        height: addUnit(data.previewSize),
      })
}

export { sizeStyle }
