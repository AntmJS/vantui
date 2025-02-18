import { canvasToTempFilePath, hideLoading } from '@tarojs/taro'

export function rotateImage(params: {
  imageHeight: number
  imageWidth: number
  imagePath: string
  canvasId: string
  rotate: number
  ctx: any
}) {
  return new Promise((resove) => {
    const { imageHeight, imageWidth, rotate, ctx, imagePath, canvasId } = params

    let canvasWidth, canvasHeight

    if (rotate === 90 || rotate === 270) {
      canvasWidth = imageHeight
      canvasHeight = imageWidth
    } else {
      canvasWidth = imageWidth
      canvasHeight = imageHeight
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    ctx.translate(canvasWidth / 2, canvasHeight / 2)
    ctx.rotate((rotate * Math.PI) / 180)

    ctx.drawImage(
      imagePath,
      -imageWidth / 2,
      -imageHeight / 2,
      imageWidth,
      imageHeight,
    )

    ctx.translate(-canvasWidth / 2, -canvasHeight / 2)
    ctx.rotate((-rotate * Math.PI) / 180)

    ctx.draw(false, () => {
      canvasToTempFilePath({
        canvasId: canvasId,
        success: (res) => {
          resove(res.tempFilePath)
        },
        fail: (err) => {
          hideLoading()
          console.error('rotateImage fail', err)
        },
      })
    })
  })
}
