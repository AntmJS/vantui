import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function wrapperStyle(data: any) {
  const width = 100 / data.columnNum + '%'

  return style({
    width: width,
    'padding-top': data.square ? width : null,
    'padding-right': addUnit(data.gutter),
    'margin-top':
      data.index >= data.columnNum && !data.square
        ? addUnit(data.gutter)
        : null,
  })
}

function contentStyle(data: any) {
  return data.square
    ? style({
        right: addUnit(data.gutter),
        bottom: addUnit(data.gutter),
        height: 'auto',
      })
    : ''
}

export { wrapperStyle, contentStyle }
