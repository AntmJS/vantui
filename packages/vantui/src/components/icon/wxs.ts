import { style } from '../wxs/style'
import { addUnit } from '../wxs/add-unit'

function isImage(name: any) {
  return name.indexOf('/') !== -1
}

function rootClass(data: any) {
  const classes = []

  if (data.classPrefix != null) {
    classes.push(data.classPrefix)
  }

  if (isImage(data.name)) {
    classes.push('van-icon--image')
  } else if (data.classPrefix != null) {
    classes.push(data.classPrefix + '-' + data.name)
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
