import Taro from '@tarojs/taro'
import { useState, useRef, useEffect } from 'react'
import { View, Canvas, CoverView } from '@tarojs/components'

import { CircleProps } from '../../../types/circle'
import { getSystemInfoSync } from '../common/utils.js'
import { isObj } from '../common/validator.js'
import { canIUseCanvas2d } from '../common/version.js'
import { adaptor } from './canvas.js'

function format(rate: number) {
  return Math.min(Math.max(rate, 0), 100)
}
const PERIMETER = 2 * Math.PI
const BEGIN_ANGLE = -Math.PI / 2
const STEP = 1

export default function Index(props: CircleProps) {
  const [state, setState] = useState({
    hoverColor: '#0000ff',
  })

  const ref: any = useRef({
    inited: false,
    currentValue: undefined,
    interval: undefined,
  })

  const {
    text,
    lineCap = 'round',
    value = 0,
    speed = 50,
    size = 100,
    fill,
    layerColor = '#ffffff',
    color = '#0000ff',
    type = '',
    strokeWidth = 4,
    clockwise = true,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    ref.current.currentValue = value
    setHoverColor().then(() => {
      drawCircle(ref.current.currentValue)
    })

    return () => {
      clearMockInterval()
    }
  }, [])

  useEffect(() => {
    reRender()
  }, [value])

  useEffect(() => {
    drawCircle(ref.current.currentValue)
  }, [size])

  useEffect(() => {
    setHoverColor().then(() => {
      drawCircle(ref.current.currentValue)
    })
  }, [color])

  const getContext = function () {
    if (type === '' || !canIUseCanvas2d()) {
      const ctx = Taro.createCanvasContext('van-circle')
      return Promise.resolve(ctx)
    }
    const dpr = getSystemInfoSync().pixelRatio
    return new Promise((resolve: any) => {
      Taro.createSelectorQuery()
        .select('#van-circle')
        .node()
        .exec((res: any) => {
          const canvas = res[0].node
          const ctx = canvas.getContext(type)
          if (!ref.current.inited) {
            ref.current.inited = true
            canvas.width = size * dpr
            canvas.height = size * dpr
            ctx.scale(dpr, dpr)
          }
          resolve(adaptor(ctx))
        })
    })
  }
  const setHoverColor = function () {
    if (isObj(color)) {
      return getContext().then((context: any) => {
        const LinearColor = context.createLinearGradient(size, 0, 0, 0)
        Object.keys(color)
          .sort((a, b) => parseFloat(a) - parseFloat(b))
          .map((key: any) =>
            LinearColor.addColorStop(parseFloat(key) / 100, color[key]),
          )
        setState({
          hoverColor: LinearColor,
        })
      })
    }
    setState({
      hoverColor: color,
    })
    return Promise.resolve()
  }
  const presetCanvas = function (
    context: any,
    strokeStyle: any,
    beginAngle: any,
    endAngle: any,
    fill?: any,
  ) {
    const position = size / 2
    const radius = position - strokeWidth / 2
    context.setStrokeStyle(strokeStyle)
    context.setLineWidth(strokeWidth)
    context.setLineCap(lineCap)
    context.beginPath()
    context.arc(position, position, radius, beginAngle, endAngle, !clockwise)
    context.stroke()
    if (fill) {
      context.setFillStyle(fill)
      context.fill()
    }
  }
  const renderLayerCircle = function (context: any) {
    presetCanvas(context, layerColor, 0, PERIMETER, fill)
  }
  const renderHoverCircle = function (context: any, formatValue: any) {
    // 结束角度
    const progress = PERIMETER * (formatValue / 100)
    const endAngle = clockwise
      ? BEGIN_ANGLE + progress
      : 3 * Math.PI - (BEGIN_ANGLE + progress)
    presetCanvas(context, state.hoverColor, BEGIN_ANGLE, endAngle)
  }
  const drawCircle = function (currentValue: any) {
    getContext().then((context: any) => {
      context.clearRect(0, 0, size, size)
      renderLayerCircle(context)
      const formatValue = format(currentValue)
      if (formatValue !== 0) {
        renderHoverCircle(context, formatValue)
      }
      context.draw()
    })
  }
  const reRender = function () {
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
  }
  const clearMockInterval = function () {
    if (ref.current.interval) {
      clearTimeout(ref.current.interval)
      ref.current.interval = null
    }
  }

  return (
    <View className={`van-circle ${className}`} style={style} {...others}>
      <Canvas
        className="van-circle__canvas"
        type={type}
        style={'width: ' + `${size}px` + ';height:' + `${size}px`}
        id="van-circle"
        canvasId="van-circle"
      ></Canvas>
      {!text ? (
        <View className="van-circle__text">{children}</View>
      ) : (
        <CoverView className="van-circle__text">{text}</CoverView>
      )}
    </View>
  )
}
