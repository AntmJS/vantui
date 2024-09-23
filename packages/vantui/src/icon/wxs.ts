import Taro from '@tarojs/taro'
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
      height: addUnit(data.size),
    },
  ])
}

//复制icon
function copyIcon(name: string) {
  Taro.setClipboardData({
    data: `<Icon name='${name}' size="32px" />`,
    success: () => {
      Taro.showToast({
        title: '复制成功',
        icon: 'none',
      })
    },
  })
}

export { isImage, rootClass, rootStyle, copyIcon }
