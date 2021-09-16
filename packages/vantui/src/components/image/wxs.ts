import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: any) {
  return style([
    {
      width: addUnit(data.width),
      height: addUnit(data.height),
      'border-radius': addUnit(data.radius),
    },
    data.radius ? 'overflow: hidden' : null,
  ])
}

const FIT_MODE_MAP = {
  none: 'center',
  fill: 'scaleToFill',
  cover: 'aspectFill',
  contain: 'aspectFit',
  widthFix: 'widthFix',
  heightFix: 'heightFix',
}

export type FitType =
  | 'none'
  | 'fill'
  | 'cover'
  | 'contain'
  | 'widthFix'
  | 'heightFix'

function mode(fit: FitType) {
  return FIT_MODE_MAP[fit]
}

export { rootStyle, mode }
