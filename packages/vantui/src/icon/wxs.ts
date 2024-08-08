import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function isImage(name: any) {
  return name.indexOf('/') !== -1
}

function rootClass(data: any) {
  const classes: any[] = []

  if (data.classPrefix) {
    classes.push(data.classPrefix)
  }

  if (isImage(data.name)) {
    classes.push('van-icon--image')
  } else {
    const prefixName = data.classPrefix
      ? `${data.classPrefix}-${data.name}`
      : data.name
    classes.push(prefixName)
  }

  return classes.join(' ')
}

function rootStyle(data: any) {
  return style([
    {
      color: data.color,
      'font-size': addUnit(data.size),
    },
  ])
}

export { isImage, rootClass, rootStyle }
