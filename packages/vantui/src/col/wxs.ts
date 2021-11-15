import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: any) {
  if (!data.gutter) {
    return ''
  }

  return style({
    'padding-right': addUnit(data.gutter / 2),
    'padding-left': addUnit(data.gutter / 2),
  })
}

export { rootStyle }
