import * as array from './array'
import * as object from './object'

function kebabCase(word: any) {
  const newWord = word
    .replace(new RegExp('[A-Z]', 'g'), function (i: any) {
      return '-' + i
    })
    ?.toLowerCase()

  return newWord
}

function cssStyle(styles: any): Record<string, any> {
  if (array.isArray(styles)) {
    const obj: any = {}
    styles
      .filter(function (item: any) {
        return item != null && item !== ''
      })
      .map(function (item: any) {
        Object.assign(obj, cssStyle(item))
      })
    return obj
  }

  if (toString.call(styles) === '[object String]') {
    const obj: any = {}
    styles.split(';').map((item: string) => {
      const property = item.split(':')
      obj[property[0]?.trim() || ''] = property[1]?.trim()
    })
    return obj
  }

  return styles
}

function style(styles: any): string {
  if (array.isArray(styles)) {
    return (
      styles
        .filter(function (item: any) {
          return item != null && item !== ''
        })
        .map(function (item: any) {
          return style(item)
        })
        .join(';') || ''
    )
  }

  if (toString.call(styles) === '[object Object]') {
    return (
      object
        .keys(styles)
        .filter(function (key: any) {
          return styles[key] != null && styles[key] !== ''
        })
        .map(function (key: any) {
          return [kebabCase(key), [styles[key]]].join(':')
        })
        .join(';') || ''
    )
  }

  return styles || ''
}

export { style, cssStyle }
