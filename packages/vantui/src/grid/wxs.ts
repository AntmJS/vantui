import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: any) {
  return style({
    'padding-left': addUnit(data.gutter),
  })
}

export { rootStyle }
