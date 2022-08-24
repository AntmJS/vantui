import { style } from '../wxs/utils'
import { addUnit } from '../wxs/add-unit'

function rootStyle(data: {
  gutter: number | string | [number, number] | [string, string] | undefined
}) {
  const styles: Record<string, string | number> = {}
  let hor: string | number | null = null
  let ver: string | number | null = null

  if (!data.gutter) {
    return ''
  }

  if (Array.isArray(data.gutter)) {
    if (data.gutter.length > 0) {
      hor = data.gutter[0]
    }
    if (data.gutter.length > 1) {
      ver = data.gutter[1]
    }
  } else {
    hor = data.gutter
  }

  const judge = (val: string | number, pos: 'x' | 'y') => {
    let unit = ''
    let value = 0

    if (typeof val == 'string' && val.constructor == String) {
      const matches = /^([\.\-\d]+)([^\d]*)$/gi.exec(val)
      if (matches && matches.length > 0) {
        value = Number(matches[1])
        if (matches[2]) {
          unit = matches[2] === 'px' ? '' : matches[2]
        }
      }
    } else if (typeof val == 'number' && val.constructor == Number) {
      value = val
    }

    const v = addUnit(value / 2 + unit)

    if (pos === 'x') {
      styles['padding-right'] = v
      styles['padding-left'] = v
    }

    if (pos === 'y') {
      styles['padding-top'] = v
      styles['padding-bottom'] = v
    }
  }

  if (hor != null) judge(hor, 'x')
  if (ver != null) judge(ver, 'y')

  const result = style(styles)
  return result
}

export { rootStyle }
