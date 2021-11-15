import { style } from '../wxs/style'

function rootStyle(data: any) {
  return style({
    color: data.color,
    'background-color': data.backgroundColor,
    background: data.background,
  })
}

export { rootStyle }
