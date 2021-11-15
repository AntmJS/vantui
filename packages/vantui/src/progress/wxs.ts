import * as utils from '../wxs/utils'

function pivotText(pivotText: any, percentage: any) {
  return pivotText || percentage + '%'
}

function rootStyle(data: any) {
  return utils.style({
    height: data.strokeWidth ? utils.addUnit(data.strokeWidth) : '',
    background: data.trackColor,
  })
}

function portionStyle(data: any) {
  return utils.style({
    background: data.inactive ? '#cacaca' : data.color,
    width: data.percentage ? data.percentage + '%' : '',
  })
}

function pivotStyle(data: any) {
  return utils.style({
    color: data.textColor,
    visibility: data.right === 0 ? 'hidden' : 'visible',
    right: data.right + 'px',
    background: data.pivotColor
      ? data.pivotColor
      : data.inactive
      ? '#cacaca'
      : data.color,
  })
}

export { pivotText, rootStyle, portionStyle, pivotStyle }
