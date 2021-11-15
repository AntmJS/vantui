function isMulti(options: any) {
  if (options == null || options[0] == null) {
    return false
  }

  return Array.isArray(options) && Array.isArray(options[0])
}

const PRESET_ICONS = [
  'qq',
  'link',
  'weibo',
  'wechat',
  'poster',
  'qrcode',
  'weapp-qrcode',
  'wechat-moments',
]

function getIconURL(icon: string) {
  if (PRESET_ICONS.indexOf(icon) !== -1) {
    return 'https://img.yzcdn.cn/vant/share-sheet-' + icon + '.png'
  }

  return icon
}

export { isMulti, getIconURL }
