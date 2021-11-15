import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function titleStyle(data: any) {
  return style([
    {
      'max-width': addUnit(data.titleWidth),
      'min-width': addUnit(data.titleWidth),
    },
    data.titleStyle,
  ])
}

export { titleStyle }
