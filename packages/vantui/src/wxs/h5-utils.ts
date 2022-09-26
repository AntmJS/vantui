import { _bem } from './bem'
import { memoize } from './memoize'
import { isArray } from './array'
import { keys } from './object'

const bem: (name: any, conf?: any) => string = memoize(_bem)

function addUnit(attr) {
  if (attr == null) {
    return undefined
  }

  return transformPX(attr)
}

export { memoize, bem, isArray, keys, addUnit }

function transformPX(size) {
  let rootFontSize = 20

  if (document.documentElement.style.fontSize) {
    const rSize = document.documentElement.style.fontSize.replace('px', '')

    rootFontSize = Number(rSize)
  }

  if (typeof size === 'string') {
    if (size.includes('px')) {
      const size_ = Number(size.replace('px', ''))
      return `${size_ / rootFontSize}rem`
    } else return size
  }

  if (typeof size === 'number') {
    return `${size / rootFontSize}rem`
  }

  return size
}
