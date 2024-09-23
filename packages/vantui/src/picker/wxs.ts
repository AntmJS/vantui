/* eslint-disable */
import { style } from '../wxs/utils'

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
  let cc: any[] = []
  if (columns?.every((it) => Array.isArray(it.values))) {
    cc = columns.map((it) => it.values)
  } else if (columns.every((it) => !Array.isArray(it))) {
    cc = [columns]
  } else {
    columns.forEach((it) => {
      if (Array.isArray(it)) {
        cc.push(it)
      } else {
        cc.push([it])
      }
    })
  }

  return cc
}

export { columnsStyle, frameStyle, maskStyle, columns }
