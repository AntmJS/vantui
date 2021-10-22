import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function isObj(x: any) {
  const type = typeof x
  return x !== null && (type === 'object' || type === 'function')
}

function optionText(option: any, valueKey: any) {
  return isObj(option) && option[valueKey] != null ? option[valueKey] : option
}

function rootStyle(data: any) {
  return style({
    height: data.itemHeight * data.visibleItemCount + 'px',
  })
}

function wrapperStyle(data: any) {
  // if (process.env.TARO_ENV === 'h5') {
  //   const offset = addUnit(
  //     data.offset + (data.itemHeight * (data.visibleItemCount - 1)) / 2,
  //   )

  //   return style({
  //     transition: 'transform ' + data.duration + 'ms',
  //     'line-height': addUnit(data.itemHeight),
  //     transform: 'translate3d(0, ' + offset + ', 0)',
  //   })
  // }

  const offset =
    data.offset + (data.itemHeight * (data.visibleItemCount - 1)) / 2

  return style({
    transition: 'transform ' + data.duration + 'ms',
    'line-height': data.itemHeight + 'px',
    transform: 'translate3d(0, ' + offset + 'px' + ', 0)',
  })
}

function styleTran(data: any) {
  const res: any = {}
  Object.keys(data).map((key) => {
    res[key] = addUnit(data[key])
  })
  return style(res)
}

export { optionText, rootStyle, wrapperStyle, styleTran }
