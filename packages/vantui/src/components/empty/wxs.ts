const PRESETS = ['error', 'search', 'default', 'network']

function imageUrl(image: string) {
  if (PRESETS.indexOf(image) !== -1) {
    return 'https://img.yzcdn.cn/vant/empty-image-' + image + '.png'
  }

  return image
}

export { imageUrl }
