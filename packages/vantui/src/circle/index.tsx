import {
  // createSelectorQuery,
  createCanvasContext,
  // useReady,
} from '@tarojs/taro'
import { useState, useRef, useEffect, useCallback } from 'react'
import { View, Canvas, CoverView } from '@tarojs/components'
import { Current } from '@tarojs/runtime'

import { CircleProps } from '../../types/circle'
// import { getSystemInfoSync } from '../common/utils'
import { isObj } from '../common/validator'
// import { adaptor } from './canvas'

function format(rate: number) {
  return Math.min(Math.max(rate, 0), 100)
}
const PERIMETER = 2 * Math.PI
const BEGIN_ANGLE = -Math.PI / 2
const STEP = 1
let CIRCLE_INDEX = 0

export function Circle(props: CircleProps) {
  const [state, setState] = useState({
    ready: false,
    hoverColor: '',
    unitag: '',
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
    color = '#1989fa',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type = '',
    strokeWidth = 4,
    clockwise = true,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        // unitag: process.env.TARO_ENV === 'h5' ? `van-circle_uni_${CIRCLE_INDEX++}` : 'van-circle',
        unitag: `van-circle_uni_${CIRCLE_INDEX++}`,
      }
    })
  }, [])

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        ready: true,
      }
    })
  }, [])

  useEffect(() => {
    /* eslint-disable-next-line */
    // @ts-ignore
    if (process.env.LIBRARY_ENV === 'react') {
      setTimeout(() => {
        if (process.env.TARO_ENV === 'h5') {
          setState((state) => {
            return {
              ...state,
              ready: true,
            }
          })
        }
      }, 100)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getContext = useCallback(() => {
    /* eslint-disable-next-line */
    // @ts-ignore
    if (process.env.LIBRARY_ENV === 'react') {
      /* eslint-disable-next-line */
      // @ts-ignore
      Current.page = { path: `page-${state.unitag}` }
    }
    let ctx: any = null
    try {
      ctx = createCanvasContext(state.unitag)
    } catch (error) {}

    return Promise.resolve(ctx)
    // const dpr = getSystemInfoSync().pixelRatio
    // return new Promise((resolve: any) => {
    //   createSelectorQuery()
    //     .select(`.${state.unitag}`)
    //     .node()
    //     .exec((res: any) => {
    //       const canvas = res[0].node
    //       if (canvas) {
    //         const ctx = canvas.getContext(type)
    //         if (!ref.current.inited) {
    //           ref.current.inited = true
    //           canvas.width = size * dpr
    //           canvas.height = size * dpr
    //           ctx.scale(dpr, dpr)
    //         }
    //         resolve(adaptor(ctx))
    //       }
    //     })
    // })
  }, [state.unitag])

  const setHoverColor = function () {
    if (isObj(color)) {
      const _color = color as Record<string, string>
      return getContext()
        .then((context: any) => {
          if (context) {
            const LinearColor = context.createLinearGradient(size, 0, 0, 0)
            Object.keys(color)
              .sort((a, b) => parseFloat(a) - parseFloat(b))
              .map((key: any) =>
                LinearColor.addColorStop(parseFloat(key) / 100, _color[key]),
              )
            setState((state) => {
              return {
                ...state,
                hoverColor: LinearColor,
              }
            })
          }
        })
        .catch(() => {})
    }
    setState((state: any) => {
      return {
        ...state,
        hoverColor: color,
      }
    })
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
        ? BEGIN_ANGLE + progress
        : 3 * Math.PI - (BEGIN_ANGLE + progress)
      presetCanvas(context, state.hoverColor, BEGIN_ANGLE, endAngle)
    },
    [clockwise, presetCanvas, state.hoverColor],
  )
  const drawCircle = useCallback(
    (currentValue: any) => {
      getContext()
        .then((context: any) => {
          if (context) {
            context.clearRect(0, 0, size, size)
            renderLayerCircle(context)
            const formatValue = format(currentValue)
            if (formatValue !== 0) {
              renderHoverCircle(context, formatValue)
            }
            context.draw().catch(() => {})
          }
        })
        .catch(() => {})
    },
    [getContext, renderHoverCircle, renderLayerCircle, size],
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
    if (state.ready) {
      reRender()
    }
  }, [reRender, state.ready, value])

  useEffect(() => {
    if (state.ready && state.unitag) {
      drawCircle(ref.current.currentValue)
    }
    // eslint-disable-next-line
  }, [state.ready, size, state.unitag])

  useEffect(() => {
    if (state.ready && state.unitag) {
      setHoverColor()
        .then(() => {
          drawCircle(ref.current.currentValue)
        })
        .catch(() => {})
    }
    // eslint-disable-next-line
  }, [state.ready, color, state.unitag])

  useEffect(() => {
    return () => {
      clearMockInterval()
    }
    /* eslint-disable-next-line */
  }, [state.ready])

  return (
    <View
      id={`page-${state.unitag}`}
      className={`van-circle ${className}`}
      style={style}
      {...others}
    >
      <Canvas
        // eslint-disable-next-line
        // @ts-ignore
        width={size}
        height={size}
        nativeProps={{ width: size, height: size }}
        className={`van-circle__canvas ${state.unitag}`}
        // type={type}
        style={'width: ' + `${size}px` + ';height:' + `${size}px`}
        id={state.unitag}
        canvasId={state.unitag}
      ></Canvas>
      {!text ? (
        <View className="van-circle__text">{children}</View>
      ) : process.env.TARO_ENV === 'dd' ? (
        <View className="van-circle__text">{text}</View>
      ) : (
        <CoverView className="van-circle__text">{text}</CoverView>
      )}
    </View>
  )
}

export default Circle
