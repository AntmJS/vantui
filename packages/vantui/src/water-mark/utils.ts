import { createSelectorQuery, getSystemInfo } from '@tarojs/taro'

export function getCanvas(compIndex) {
  return new Promise((resolve) => {
    if (process.env.TARO_ENV !== 'h5') {
      createSelectorQuery()
        .select(`#van-water-mark${compIndex}`)
        .node()
        .exec((res) => {
          resolve(res[0].node)
        })
    } else {
      resolve(document.createElement('canvas'))
    }
  })
}

export function getWaterData({
  setCanvasRect,
  width,
  height,
  gapX,
  gapY,
  rotate,
  image,
  imageWidth,
  imageHeight,
  fontSize,
  content,
  fontWeight,
  fontFamily,
  fontStyle,
  fontColor,
  canvas,
}): Promise<string> {
  return new Promise(async (resolve) => {
    const ctx = canvas.getContext('2d')
    const ratio = (await getSystemInfo()).pixelRatio
    const canvasWidth = `${(gapX + width) * ratio}px`
    const canvasHeight = `${(gapY + height) * ratio}px`

    const markWidth = width * ratio
    const markHeight = height * ratio
    let base64Url: any

    setCanvasRect({
      width: canvasWidth,
      height: canvasHeight,
    })
    if (image) {
      ctx.translate(markWidth / 2, markHeight / 2)
      ctx.rotate((Math.PI / 180) * Number(rotate))

      const img =
        process.env.TARO_ENV === 'h5' ? new Image() : canvas.createImage()
      img.crossOrigin = 'anonymous'
      img.referrerPolicy = 'no-referrer'
      img.src = image
      img.onload = () => {
        ctx.drawImage(
          img,
          (-imageWidth * ratio) / 2,
          (-imageHeight * ratio) / 2,
          imageWidth * ratio,
          imageHeight * ratio,
        )
        ctx.restore()
        base64Url = canvas.toDataURL()
        resolve(base64Url)
      }
    } else if (content) {
      ctx.textBaseline = 'middle'
      ctx.textAlign = 'center'
      // 文字绕中间旋转
      ctx.translate(markWidth / 2, markHeight / 2)
      ctx.rotate((Math.PI / 180) * Number(rotate))

      const markSize = Number(fontSize) * ratio
      ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`
      ctx.fillStyle = fontColor

      ctx.fillText(content, 0, 0)
      ctx.restore()
      base64Url = canvas.toDataURL()

      resolve(base64Url)
    }
  })
}
