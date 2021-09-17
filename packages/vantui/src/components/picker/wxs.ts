/* eslint-disable */
import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'
import { isArray } from '../wxs/array'

function columnsStyle(data: any) {
  return style({
    height: addUnit(data.itemHeight * data.visibleItemCount),
  })
}

function maskStyle(data: any) {
  return style({
    'background-size':
      '100% ' + addUnit((data.itemHeight * (data.visibleItemCount - 1)) / 2),
  })
}

function frameStyle(data: any) {
  return style({
    height: addUnit(data.itemHeight),
  })
}

function columns(columns: any) {
  if (!isArray(columns)) {
    return []
  }

  if (columns.length && !columns[0].values) {
    return [{ values: columns }]
  }

  return columns
}

export { columnsStyle, frameStyle, maskStyle, columns }
