import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: any) {
  if (!data.gutter) {
    return ''
  }

  return style({
    'margin-right': addUnit(-data.gutter / 2),
    'margin-left': addUnit(-data.gutter / 2),
  })
}

export { rootStyle }
