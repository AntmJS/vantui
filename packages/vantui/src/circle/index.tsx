import { createCanvasContext, createSelectorQuery } from '@tarojs/taro'
import { useRef, useState, useEffect, useCallback } from 'react'
import { View, Canvas } from '@tarojs/components'
import { Current } from '@tarojs/runtime'
import { CircleProps } from '../../types/circle'
import { isObj } from '../common/validator'

function format(rate: number) {
  return Math.min(Math.max(rate, 0), 100)
}
const PERIMETER = 2 * Math.PI
const BEGIN_ANGLE = -Math.PI / 2
const STEP = 1

export function Circle(props: CircleProps) {
  const indexRef = useRef(
    `van-circle_uni_${+new Date()}${Math.ceil(Math.random() * 10000)}`,
  )
  const [ready, setReady] = useState(false)

  const ref = useRef<any>({
    ctx: undefined,
    inited: false,
    currentValue: undefined,
    interval: undefined,
    hoverColor: '',
  })

  const {
    text,
    lineCap = 'round',
    value = 0,
    speed = 50,
    size = 100,
    fill,
    layerColor = '#ffffff',
    color = '#1989fa',
    strokeWidth = 4,
    clockwise = true,
    beginAngle = BEGIN_ANGLE,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    Current.page = Current.page ?? { path: `page-${indexRef.current}` }
    setTimeout(() => {
      if (
        process.env.TARO_ENV !== 'h5' &&
        process.env.TARO_ENV !== 'swan' &&
        process.env.TARO_ENV !== 'kwai'
      ) {
        const query = createSelectorQuery()
        query
          .select(`#${indexRef.current}`)
          .fields({ node: true, size: true })
          .exec((res) => {
            const canvas = res[0].node
            const ctx = canvas.getContext('2d')
            canvas.width = res[0].width * 3
            canvas.height = res[0].height * 3
            ctx.scale(3, 3)
            ref.current.ctx = ctx
            setReady(true)
          })
      } else {
        const ctx = createCanvasContext(indexRef.current)
        ref.current.ctx = ctx
        setReady(true)
      }
    }, 100)
  }, [])

  const setHoverColor = function () {
    if (isObj(color)) {
      const _color = color as Record<string, string>
      try {
        // 快手不支持渐变色
        if (process.env.TARO_ENV === 'kwai') {
          Object.keys(color)
            .sort((a, b) => parseFloat(a) - parseFloat(b))
            .map((key: any) => (ref.current.hoverColor = _color[key]))
        } else {
          const LinearColor = ref.current.ctx.createLinearGradient(
            size,
            0,
            0,
            0,
          )
          Object.keys(color)
            .sort((a, b) => parseFloat(a) - parseFloat(b))
            .map((key: any) =>
              LinearColor.addColorStop(parseFloat(key) / 100, _color[key]),
            )
          ref.current.hoverColor = LinearColor
        }
      } catch (error) {
        console.error(error)
      }
    } else {
      ref.current.hoverColor = color
    }
    return Promise.resolve()
  }
  const presetCanvas = useCallback(
    (
      context: any,
      strokeStyle: any,
      beginAngle: any,
      endAngle: any,
      fill?: any,
    ) => {
      const position = size / 2
      const radius = position - strokeWidth / 2
      if (process.env.TARO_ENV === 'swan') {
        context.setStrokeStyle(strokeStyle)
        context.setLineWidth(strokeWidth)
        context.setLineCap(lineCap)
      } else {
        context.strokeStyle = strokeStyle
        context.lineWidth = strokeWidth
        context.lineCap = lineCap
      }
      context.beginPath()
      context.arc(position, position, radius, beginAngle, endAngle, !clockwise)
      context.stroke()
      if (fill) {
        if (process.env.TARO_ENV === 'swan') {
          context.setFillStyle(fill)
        } else {
          context.fillStyle = fill
        }
        context.fill()
      }
    },
    [clockwise, lineCap, size, strokeWidth],
  )
  const renderLayerCircle = useCallback(
    (context: any) => {
      presetCanvas(context, layerColor, 0, PERIMETER, fill)
    },
    [fill, layerColor, presetCanvas],
  )
  const renderHoverCircle = useCallback(
    (context: any, formatValue: any) => {
      // 结束角度
      const progress = PERIMETER * (formatValue / 100)
      const endAngle = clockwise
        ? beginAngle + progress
        : 3 * Math.PI - (beginAngle + progress)
      presetCanvas(context, ref.current.hoverColor, beginAngle, endAngle)
    },
    [clockwise, presetCanvas],
  )
  const drawCircle = useCallback(
    (currentValue: any) => {
      ref.current.ctx.clearRect(0, 0, size, size)
      renderLayerCircle(ref.current.ctx)
      const formatValue = format(currentValue)
      if (formatValue !== 0) {
        renderHoverCircle(ref.current.ctx, formatValue)
      }
      if (
        process.env.TARO_ENV === 'h5' ||
        process.env.TARO_ENV === 'swan' ||
        process.env.TARO_ENV === 'kwai'
      ) {
        ref.current.ctx.draw()
      }
    },
    [renderHoverCircle, renderLayerCircle, size],
  )
  const clearMockInterval = function () {
    if (ref.current.interval) {
      clearTimeout(ref.current.interval)
      ref.current.interval = null
    }
  }
  const reRender = useCallback(() => {
    if (speed <= 0 || speed > 1000) {
      drawCircle(value)
      return
    }
    clearMockInterval()
    ref.current.currentValue = ref.current.currentValue || 0
    const run = () => {
      ref.current.interval = setTimeout(() => {
        if (ref.current.currentValue !== value) {
          if (Math.abs(ref.current.currentValue - value) < STEP) {
            ref.current.currentValue = value
          } else if (ref.current.currentValue < value) {
            ref.current.currentValue += STEP
          } else {
            ref.current.currentValue -= STEP
          }
          drawCircle(ref.current.currentValue)
          run()
        } else {
          clearMockInterval()
        }
      }, 1000 / speed)
    }
    run()
  }, [drawCircle, speed, value])

  useEffect(() => {
    if (ready) {
      reRender()
    }
  }, [reRender, value, ready])

  useEffect(() => {
    if (ready) {
      drawCircle(ref.current.currentValue)
    }
    // eslint-disable-next-line
  }, [size, ready])

  useEffect(() => {
    if (ready) {
      setHoverColor()
        .then(() => {
          drawCircle(ref.current.currentValue)
        })
        .catch(() => {})
    }
    // eslint-disable-next-line
  }, [color, ready])

  useEffect(() => {
    return () => {
      clearMockInterval()
    }
    /* eslint-disable-next-line */
  }, [])
  return (
    <View
      id={`page-${indexRef.current}`}
      className={`van-circle ${className}`}
      style={style}
      {...others}
    >
      <Canvas
        // eslint-disable-next-line
        // @ts-ignore
        width={size}
        // @ts-ignore
        height={size}
        nativeProps={{ width: size, height: size }}
        className={`van-circle__canvas ${indexRef.current}`}
        style={'width: ' + `${size}px` + ';height:' + `${size}px`}
        id={indexRef.current}
        type="2d"
        canvasId={indexRef.current}
      ></Canvas>
      {!text ? (
        <View className="van-circle__text">{children}</View>
      ) : (
        <View className="van-circle__text">{text}</View>
      )}
    </View>
  )
}

export default Circle
