import { style } from '../wxs/style'

function rootStyle(data: any) {
  if (!data.color) {
    return ''
  }

  const properties: any = {
    color: data.plain ? data.color : '#fff',
    background: data.plain ? null : data.color,
  }

  // hide border when color is linear-gradient
  if (data.color.indexOf('gradient') !== -1) {
    properties.border = 0
  } else {
    properties['border-color'] = data.color
  }

  return style([properties])
}

function loadingColor(data: any) {
  if (data.plain) {
    return data.color ? data.color : '#c9c9c9'
  }

  if (data.type === 'default') {
    return '#c9c9c9'
  }

  return '#fff'
}

export { rootStyle, loadingColor }
