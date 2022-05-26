import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function inputStyle(autosize: any) {
  if (autosize && autosize.constructor.name === 'Object') {
    return style({
      'min-height': addUnit(autosize.minHeight),
      'max-height': addUnit(autosize.maxHeight),
    })
  }

  return ''
}

export { inputStyle }
