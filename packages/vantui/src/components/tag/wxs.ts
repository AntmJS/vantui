import { style } from '../wxs/style'
function rootStyle(data: any) {
  return style({
    'background-color': data.plain ? '' : data.color,
    color: data.textColor || data.plain ? data.textColor || data.color : '',
  })
}

export { rootStyle }
