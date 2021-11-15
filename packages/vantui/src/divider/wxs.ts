import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: any) {
  return style([
    {
      'border-color': data.borderColor,
      color: data.textColor,
      'font-size': addUnit(data.fontSize),
    },
  ])
}

export { rootStyle }
