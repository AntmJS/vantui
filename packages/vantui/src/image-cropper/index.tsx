import { Canvas, Image, View } from '@tarojs/components'
import { useEffect, useMemo, useRef, useState } from 'react'
import {
  getSystemInfoSync,
  showLoading,
  hideLoading,
  getImageInfo,
  createCanvasContext,
  canvasToTempFilePath,
} from '@tarojs/taro'
import { ImageCropperProps } from '../../types/image-cropper'
import { getRect } from '../common/utils'
import { Button } from '../button'
import { Icon } from '../icon'
import { rotateImage } from './utils'
import { drawCropperImage, drawImageWithRotation } from './h5'

const initPercent = 0.9
const pageRects = {
  windowWidth: 0,
  windowHeight: 0,
  pixelRatio: 1,
}
const res = getSystemInfoSync()
const { windowWidth, windowHeight, pixelRatio } = res
pageRects.windowWidth = windowWidth
pageRects.windowHeight = windowHeight
pageRects.pixelRatio = pixelRatio

export default function ImageCropper(props: ImageCropperProps) {
  const { allowScale = true, image, scale = 2, fixScale = false } = props

  const [imageRotate, setimageRotate] = useState(0)
  // eslint-disable-next-line prefer-const
  let [imageRect, setimageRect] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    realScale: 0,
    $width: 0,
    $height: 0,
  })
  const [imageRectY, setimageRectY] = useState({
    dl: 0,
  })
  const [borderBoxRect, setborderBoxRect] = useState<any>({})
  const [scaleRect] = useState({
    x: 0,
    y: 0,
  })
  const ctxRotate = useRef<Taro.CanvasContext | null>()
  const ctx = useRef<Taro.CanvasContext | null>()

  const [borderBoxStyle, setborderBoxStyle] = useState({
    width: initPercent * pageRects.windowWidth + 'px',
    height: (initPercent * pageRects.windowWidth) / scale + 'px',
    widthBase: initPercent * pageRects.windowWidth,
    heightBase: (initPercent * pageRects.windowWidth) / scale,
    transform: 'translate(0, 0)',
    base: 0,
    nextBase: 0,
    baseX: 0,
    nextBaseX: 0,
  })
  const rects = useRef({
    x: 0,
    y: 0,
    deltaX: 0,
    deltaY: 0,
  })

  const getImage = (image?) => {
    showLoading()
    getImageInfo({
      src: props.image || image,
      fail: (err) => {
        console.info(err)
        hideLoading()
      },
      success(res: any) {
        setTimeout(() => {
          getRect(null, '#cropper-image', '#van-cropper').then((aa: any) => {
            const rect = {
              ...aa,
              $width: res.width,
              $height: res.height,
              realScale: res.width / aa.width,
            }
            setimageRect(rect)
            getBorderRects(rect).then(() => {
              hideLoading()
            })
          })
        }, 200)
      },
    })
  }

  useEffect(() => {
    setTimeout(() => {
      ctx.current = createCanvasContext('cropper-canvas')
      ctxRotate.current = createCanvasContext('cropper-canvas-rotate')
      getImage()
    }, 100)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getBorderRects = (imgRects?) => {
    return new Promise((resolve) => {
      getRect(null, '#cropper-border-box', '#van-cropper').then((res: any) => {
        setborderBoxRect(res)
        if (imgRects) {
          const dd = imgRects.top + (imgRects.height - res.height) / 2
          rects.current.deltaY = (imgRects.height - res.height) / 2
          borderBoxStyle.base = dd
          borderBoxStyle.nextBase = dd

          const xx = imgRects.left + (imgRects.width - res.width) / 2
          rects.current.deltaX = (imgRects.width - res.width) / 2
          borderBoxStyle.baseX = xx
          borderBoxStyle.nextBaseX = xx

          borderBoxStyle.transform = `translate(${xx}px, ${dd}px)`
        }

        resolve(true)
      })
    })
  }

  const updateImageRect = async () => {
    return new Promise((resolve) => {
      getRect(null, '#cropper-image', '#van-cropper').then((aa: any) => {
        imageRect = {
          ...imageRect,
          ...aa,
          realScale:
            imageRotate % 180 === 0
              ? imageRect.$width / aa.width
              : imageRect.$height / aa.width,
        }
        setimageRect({
          ...imageRect,
        })

        resolve(true)
      })
    })
  }

  const draw = async (e) => {
    e.stopPropagation()
    showLoading({
      title: '图片生成中...',
    })
    if (!ctx.current) return

    const displayWidth = Number(borderBoxStyle.width.replace('px', ''))
    const displayHeight = Number(borderBoxStyle.height.replace('px', ''))

    if (process.env.TARO_ENV === 'h5') {
      if (imageRotate !== 0) {
        await updateImageRect()
        rects.current.deltaY = borderBoxStyle.base - imageRect.top
        rects.current.deltaX = borderBoxStyle.baseX - imageRect.left
      }
      const img = await drawImageWithRotation({
        src: props.image,
        angle: imageRotate,
      })

      if (img) {
        const res = await drawCropperImage({
          x: rects.current.deltaX * imageRect.realScale,
          y: rects.current.deltaY * imageRect.realScale,
          w: displayWidth * imageRect.realScale,
          h: displayHeight * imageRect.realScale,
          src: img as any,
        })
        props.onCropper?.(res as any)
        hideLoading()
      }

      return
    }

    let image = props.image
    if (imageRotate !== 0) {
      const res: any = await rotateImage({
        imagePath: image,
        imageWidth: imageRect.$width,
        imageHeight: imageRect.$height,
        ctx: ctxRotate.current,
        rotate: imageRotate,
        canvasId: 'cropper-canvas-rotate',
      })
      image = res
      await updateImageRect()
      rects.current.deltaY = borderBoxStyle.base - imageRect.top
      rects.current.deltaX = borderBoxStyle.baseX - imageRect.left
    }

    // 绘制图片
    // @ts-ignore
    ctx.current.drawImage(
      image,
      -rects.current.deltaX,
      -rects.current.deltaY,
      imageRect.width,
      imageRect.height,
      displayWidth,
      displayHeight,
    )

    ctx.current.draw(false, () => {
      canvasToTempFilePath({
        canvasId: 'cropper-canvas',
        width: displayWidth,
        height: displayHeight,
        destWidth: displayWidth * pageRects.pixelRatio,
        destHeight: displayHeight * pageRects.pixelRatio,
        success: (res) => {
          props.onCropper?.(res.tempFilePath)
          hideLoading()
        },
        fail: (err) => {
          hideLoading()
          console.error('cropper-canvas save image failed:', err)
        },
      })
    })
  }

  const onTouchStart = (e) => {
    e.stopPropagation()
    rects.current.x = e.touches[0].clientX
    rects.current.y = e.touches[0].clientY
  }

  const onTouchMove = (e) => {
    e.stopPropagation()
    const yy = e.touches[0].clientY
    const xx = e.touches[0].clientX
    let cc = borderBoxStyle.baseX + xx - rects.current.x
    const dd = borderBoxStyle.base + yy - rects.current.y

    if (cc < 0 && Math.abs(cc) - imageRect.left > 0) {
      cc = 0
    }

    if (cc > 0 && Math.abs(cc) + borderBoxRect.width > pageRects.windowWidth) {
      cc = pageRects.windowWidth - borderBoxRect.width
    }

    borderBoxStyle.transform = `translate(${cc}px, ${dd}px)`
    borderBoxStyle.nextBase = dd
    borderBoxStyle.nextBaseX = cc
    setborderBoxStyle({
      ...borderBoxStyle,
    })
  }

  const onTouchEnd = (e) => {
    e.stopPropagation()
    getBorderRects()
    rects.current.y = 0
    rects.current.x = 0
    borderBoxStyle.base = borderBoxStyle.nextBase
    borderBoxStyle.baseX = borderBoxStyle.nextBaseX
    rects.current.deltaY = borderBoxStyle.base - imageRect.top
    rects.current.deltaX = borderBoxStyle.baseX - imageRect.left
    setborderBoxStyle({
      ...borderBoxStyle,
    })
  }

  const touchScaleStart = (e) => {
    e.stopPropagation()
    scaleRect.x = e.touches[0].clientX
    scaleRect.y = e.touches[0].clientY
  }

  const touchScaleMove = (e) => {
    e.stopPropagation()
    const yy = e.touches[0].clientY
    const xx = e.touches[0].clientX
    const aa = xx - scaleRect.x
    const bb = yy - scaleRect.y
    const currentW = borderBoxStyle.widthBase
    const currentH = borderBoxStyle.heightBase
    let newW = currentW + aa
    let newH = currentH + bb

    if (newW < 100) {
      newW = 100
    }

    if (newW > pageRects.windowWidth - 2) {
      newW = pageRects.windowWidth
    }

    if (newH < 100) {
      newH = 100
    }

    if (fixScale) {
      newH = newW / scale
    }

    borderBoxStyle.width = newW + 'px'
    borderBoxStyle.height = newH + 'px'

    setborderBoxStyle({
      ...borderBoxStyle,
    })
  }

  const touchScaleEnd = (e) => {
    getBorderRects()
    e.stopPropagation()

    borderBoxStyle.widthBase = Number(borderBoxStyle.width.replace('px', ''))
    borderBoxStyle.heightBase = Number(borderBoxStyle.height.replace('px', ''))

    setborderBoxStyle({
      ...borderBoxStyle,
    })
  }

  const currentScale = useMemo(() => {
    return (borderBoxStyle.widthBase / borderBoxStyle.heightBase).toFixed(1)
  }, [borderBoxStyle.heightBase, borderBoxStyle.widthBase])

  const imageInfos = useMemo(() => {
    const style: any = {
      width: '100vw',
    }

    if (imageRotate % 180 !== 0) {
      style.transform =
        `rotate(${imageRotate}deg)` + ` scale(${imageRectY?.dl || 1})`
    } else {
      style.transform = `rotate(${imageRotate}deg)`
    }

    return {
      style,
    }
  }, [imageRectY.dl, imageRotate])

  const handleRotate = async (num) => {
    let newRotate = imageRotate + num

    if (newRotate === -90) {
      newRotate = 270
    }
    if (newRotate > 270) {
      newRotate = 0
    }

    if (newRotate < -270) {
      newRotate = 0
    }

    setimageRotate(newRotate)

    if (newRotate % 180 !== 0 && !imageRectY?.dl) {
      setTimeout(() => {
        getRect(null, '#van-cropper >>> #cropper-image').then((res: any) => {
          setimageRectY({
            ...res,
            dl: pageRects.windowWidth / res.width,
          })
        })
      }, 500)
    }
  }

  return (
    <>
      <View
        id="van-cropper"
        className="van-cropper"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <Image
          key={`imageR${imageRotate}`}
          style={imageInfos.style}
          id="cropper-image"
          className="image"
          src={props.image}
          mode="widthFix"
        />
        <View
          // @ts-ignore
          catchMove
          id="cropper-border-box"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          style={{
            transition: 'All 0s',
            height: borderBoxStyle.height,
            width: borderBoxStyle.width,
            transform: borderBoxStyle.transform,
            opacity: imageRect.width ? 1 : 0.1,
          }}
          className="border-box"
        >
          <View
            style={allowScale ? {} : { display: 'none' }}
            onTouchStart={touchScaleStart}
            onTouchMove={touchScaleMove}
            onTouchEnd={touchScaleEnd}
            className="scale-btn diy-food-icon diy-food-icon-suofang-zuoxiang"
          >
            <Icon name="shrink" size="30px" />
          </View>
        </View>
        <View className="rotate-btns">
          <Icon onClick={() => handleRotate(-90)} name="revoke" size="32px" />
          <Icon onClick={() => handleRotate(90)} name="revoke" size="32px" />
        </View>
        <View className="cropper-btns">
          <Button onClick={() => props.onCropper?.(image)}>原图</Button>
          <View className="current-scale">宽高比约：{currentScale}</View>
          <Button type="primary" onClick={draw}>
            截图
          </Button>
        </View>
      </View>
      <Canvas
        id="cropper-canvas"
        canvas-id="cropper-canvas"
        style={{
          width: borderBoxStyle.width,
          height: borderBoxStyle.height,
          transform: 'none',
          position: 'fixed',
          left: '-900px',
          top: '0px',
          zIndex: 0,
        }}
      />

      {imageRect.width && (
        <Canvas
          id="cropper-canvas-rotate"
          canvas-id="cropper-canvas-rotate"
          style={{
            height:
              imageRotate % 180 === 0
                ? imageRect.$height + 'px'
                : imageRect.$width + 'px',
            width:
              imageRotate % 180 === 0
                ? imageRect.$width + 'px'
                : imageRect.$height + 'px',
            transform: 'none',
            position: 'fixed',
            right: '-9000px',
            top: '0px',
            zIndex: 0,
          }}
        />
      )}
    </>
  )
}
