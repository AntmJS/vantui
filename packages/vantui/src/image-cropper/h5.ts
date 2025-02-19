function drawCropperImage(params: {
  x: number
  y: number
  w: number
  h: number
  src: string
}) {
  const { x, y, w, h, src } = params
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  // document.body.append(canvas)
  return new Promise((resolve) => {
    if (ctx) {
      const img = new Image()
      img.onload = () => {
        canvas.width = w
        canvas.height = h
        ctx.drawImage(img, x, y, w, h, 0, 0, w, h)

        const croppedImageUrl = canvas.toDataURL('image/png')
        resolve(croppedImageUrl)
      }

      img.src = src
    }
  })
}

function drawImageWithRotation(params: { src: string; angle: number }) {
  const { src, angle } = params
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  // document.body.append(canvas)

  return new Promise((resolve) => {
    if (ctx) {
      const img = new Image()
      img.onload = () => {
        canvas.width = angle % 180 === 0 ? img.width : img.height
        canvas.height = angle % 180 === 0 ? img.height : img.width
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate((angle * Math.PI) / 180)
        ctx.drawImage(
          img,
          -img.width / 2,
          -img.height / 2,
          img.width,
          img.height,
        )
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        const rotatedImageUrl = canvas.toDataURL('image/png')

        resolve(rotatedImageUrl)
      }

      img.src = src
    }
  })
}

export { drawCropperImage, drawImageWithRotation }
