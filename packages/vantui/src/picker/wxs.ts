/* eslint-disable */
import { style } from '../wxs/utils'
import { isArray } from '../wxs/array'

function columnsStyle(data: any) {
  return style({
    height: data.itemHeight * data.visibleItemCount,
  })
}

function maskStyle(data: any) {
  return style({
    'background-size':
      '100% ' + ((data.itemHeight * (data.visibleItemCount - 1)) / 2 + 'px'),
  })
}

function frameStyle(data: any) {
  return style({
    height: data.itemHeight + 'px',
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
