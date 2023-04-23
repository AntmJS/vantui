import { Canvas, View } from '@tarojs/components'
import { nextTick } from '@tarojs/taro'
import classNames from 'classnames'
import { FC, useEffect, useState, useCallback } from 'react'
import { WaterMarkProps } from '../../types/water-mark'
import { getCanvas, getWaterData } from './utils'

const classPrefix = `van-water-mark`
let cIndex = 0

export const WaterMark: FC<WaterMarkProps> = (props) => {
  const {
    zIndex = 2000,
    gapX = 24,
    gapY = 48,
    width = 120,
    height = 64,
    rotate = -22,
    image,
    imageWidth = 120,
    imageHeight = 64,
    content,
    fontStyle = 'normal',
    fontWeight = 'normal',
    fontColor = 'rgba(0,0,0,.15)',
    fontSize = 14,
    fontFamily = 'sans-serif',
    fullPage = true,
  } = props

  const [base64Url, setBase64Url] = useState('')
  const [canvasRect, setCanvasRect] = useState<React.CSSProperties>()
  const [compIndex] = useState(cIndex++)

  const work = useCallback(async () => {
    const canvas: any = await getCanvas(compIndex)
    const base64Url_ = await getWaterData({
      gapX,
      gapY,
      rotate,
      fontStyle,
      fontWeight,
      width,
      height,
      fontFamily,
      fontColor,
      image,
      content,
      fontSize,
      imageWidth,
      imageHeight,
      canvas,
      setCanvasRect,
    })
    setBase64Url(base64Url_)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    gapX,
    gapY,
    rotate,
    fontStyle,
    fontWeight,
    width,
    height,
    fontFamily,
    fontColor,
    image,
    content,
    fontSize,
    imageWidth,
    imageHeight,
  ])

  useEffect(() => {
    nextTick(() => {
      work()
    })
  }, [work])

  return (
    <View
      className={classNames(classPrefix, {
        [`${classPrefix}-full-page`]: fullPage,
      })}
      style={{
        zIndex,
        backgroundSize: `${gapX + width}px`,
        backgroundImage: `url('${base64Url}')`,
      }}
    >
      <Canvas
        style={{
          ...canvasRect,
          position: 'absolute',
          left: -500,
        }}
        id={`van-water-mark${compIndex}`}
        type="2d"
      ></Canvas>
    </View>
  )
}

export default WaterMark
