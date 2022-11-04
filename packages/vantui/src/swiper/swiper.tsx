/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  Children,
  forwardRef,
  useImperativeHandle,
  isValidElement,
} from 'react'
import classNames from 'classnames'
import Taro, { useReady, createSelectorQuery } from '@tarojs/taro'
import { View, ITouchEvent, Text } from '@tarojs/components'
import { SwiperProps, SwiperInstance } from '../../types/swiper'
import { DataContext } from './context'

interface IStyle {
  width?: string
  height?: string
  transform?: string
}

const defaultProps = {
  width: typeof window === 'object' ? window.innerWidth : 375,
  height: 0,
  duration: 500,
  initPage: 0,
  autoPlay: 0,
  direction: 'horizontal',
  paginationColor: '#fff',
  paginationVisible: false,
  loop: true,
  touchable: true,
  isPreventDefault: true,
  isStopPropagation: true,
  isCenter: false,
  className: '',
} as SwiperProps

type Parent = {
  propSwiper: SwiperProps
  size?: number | string
}

const DISTANCE = 5
const Swiper = (
  props: SwiperProps,
  ref?: React.ForwardedRef<SwiperInstance>,
) => {
  const propSwiper = { ...defaultProps, ...props }
  const {
    children,
    direction,
    className,
    pageContent,
    onChange,
    initPage,
    paginationColor,
    paginationVisible,
    touchable,
    isPreventDefault,
    isStopPropagation,
    autoPlay,
    isCenter,
    style,
    ...rest
  } = propSwiper
  const container = useRef<any>(null)
  const innerRef = useRef<any>(null)
  const _swiper = useRef<any>({
    moving: false,
    autoplayTimer: null,
    width: 0,
    height: 0,
    offset: 0,
    size: 0,
  })
  const [refRandomId] = useState(Math.random().toString(36).slice(-8))

  const isVertical = direction === 'vertical'

  const [rect, setRect] = useState(null as DOMRect | null)
  // eslint-disable-next-line prefer-const
  let [active, setActive] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [offset, setOffset] = useState(0)
  const [childOffset, setChildOffset] = useState<any[]>([])
  const [ready, setReady] = useState(false)

  let size = isVertical ? height : width
  const [touch] = useState({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    stateDirection: '',
    delta: 0,
    touchTime: 0,
  })

  const { childs, childCount } = useMemo(() => {
    let childCount = 0
    const childs = Children.map(propSwiper.children, (child) => {
      if (!isValidElement(child)) return null
      childCount++
      return child
    })
    return {
      childs,
      childCount,
    }
  }, [propSwiper.children])
  let trackSize = childCount * Number(size)

  // 父组件参数传入子组件item
  const parent: Parent = {
    propSwiper,
    size,
  }
  const minOffset = (() => {
    if (rect) {
      const base = isVertical ? rect?.height : rect?.width
      return base - Number(size) * childCount
    }
    return 0
  })()
  // 清除定时器
  const stopAutoPlay = () => {
    clearTimeout(_swiper.current.autoplayTimer)
    _swiper.current.autoplayTimer = null
  }
  // 定时轮播
  const autoplay = () => {
    if (propSwiper.autoPlay <= 0 || childCount <= 1) return
    stopAutoPlay()
    _swiper.current.autoplayTimer = setTimeout(() => {
      next()
      autoplay()
    }, Number(propSwiper.autoPlay))
  }
  // 重置首尾位置信息
  const resettPosition = () => {
    _swiper.current.moving = true
    if (active <= -1) {
      move({ pace: childCount })
    }
    if (active >= childCount) {
      move({ pace: -childCount })
    }
  }

  // 上一页
  const prev = () => {
    resettPosition()
    touchReset()
    requestFrame(() => {
      requestFrame(() => {
        _swiper.current.moving = false
        move({
          pace: -1,
          isEmit: true,
        })
      })
    })
  }
  // 下一页
  const next = () => {
    resettPosition()
    touchReset()
    requestFrame(() => {
      requestFrame(() => {
        _swiper.current.moving = false
        move({
          pace: 1,
          isEmit: true,
        })
      })
    })
  }
  // 前往指定页
  const to = (index: number) => {
    resettPosition()
    touchReset()
    requestFrame(() => {
      requestFrame(() => {
        _swiper.current.moving = false
        let targetIndex
        if (propSwiper.loop && childCount === index) {
          targetIndex = active === 0 ? 0 : index
        } else {
          targetIndex = index % childCount
        }
        move({
          pace: targetIndex - active,
          isEmit: true,
        })
      })
    })
  }

  // 切换方法
  const move = ({ pace = 0, offset = 0, isEmit = false }) => {
    if (childCount <= 1) return
    const targetActive = getActive(pace)
    // 父级容器偏移量
    const targetOffset = getOffset(targetActive, offset)
    // 如果循环，调整开头结尾图片位置
    if (propSwiper.loop) {
      if (
        Array.isArray(children) &&
        children[0] &&
        targetOffset !== minOffset
      ) {
        const rightBound = targetOffset < minOffset
        childOffset[0] = rightBound ? trackSize : 0
      }
      if (
        Array.isArray(children) &&
        children[childCount - 1] &&
        targetOffset !== 0
      ) {
        const leftBound = targetOffset > 0
        childOffset[childCount - 1] = leftBound ? -trackSize : 0
      }
      setChildOffset(childOffset)
    }
    if (isEmit && active !== targetActive) {
      propSwiper.onChange &&
        propSwiper.onChange((targetActive + childCount) % childCount)
    }
    active = targetActive
    setActive(targetActive)
    setOffset(targetOffset)
    getStyle(targetOffset)
  }
  // 确定当前active 元素
  const getActive = (pace: number) => {
    if (pace) {
      const _active = active + pace
      if (propSwiper.loop) {
        return range(_active, -1, childCount)
      }
      return range(_active, 0, childCount - 1)
    }
    return active
  }
  // 计算位移
  const getOffset = (active: number, offset = 0) => {
    let currentPosition = active * Number(size)
    if (!propSwiper.loop) {
      currentPosition = Math.min(currentPosition, -minOffset)
    }
    let targetOffset = offset - currentPosition
    if (!propSwiper.loop) {
      targetOffset = range(targetOffset, minOffset, 0)
    }
    return targetOffset
  }
  // 浏览器 帧 事件
  const requestFrame = (fn: FrameRequestCallback) => {
    window.requestAnimationFrame.call(window, fn)
  }
  // 取值 方法
  const range = (num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
  }

  const getDirection = (x: number, y: number) => {
    if (x > y && x > DISTANCE) return 'horizontal'
    if (y > x && y > DISTANCE) return 'vertical'
    return ''
  }
  // 重置 全部位移信息
  const touchReset = () => {
    touch.startX = 0
    touch.startY = 0
    touch.deltaX = 0
    touch.deltaY = 0
    touch.offsetX = 0
    touch.offsetY = 0
    touch.delta = 0
    touch.stateDirection = ''
    touch.touchTime = 0
  }

  // 触摸事件开始
  const touchStart = (e: ITouchEvent) => {
    touchReset()
    touch.startX = e?.touches[0]?.clientX || 0
    touch.startY = e?.touches[0]?.clientY || 0
  }

  // 触摸事件移动
  const touchMove = (e: ITouchEvent) => {
    touch.deltaX = (e?.touches[0]?.clientX || 0) - touch.startX
    touch.deltaY = (e?.touches[0]?.clientY || 0) - touch.startY
    touch.offsetX = Math.abs(touch.deltaX)
    touch.offsetY = Math.abs(touch.deltaY)
    touch.delta = isVertical ? touch.deltaY : touch.deltaX
    if (!touch.stateDirection) {
      touch.stateDirection = getDirection(touch.offsetX, touch.offsetY)
    }
  }

  const contentClass = classNames({
    ['van-swiper__inner']: true,
    ['van-swiper__vertical']: isVertical,
  })

  const getStyle = (moveOffset = offset) => {
    const target = innerRef.current
    let _offset = 0
    if (!isCenter) {
      _offset = moveOffset
    } else {
      const _size = isVertical ? height : width
      const val = isVertical
        ? (rect as DOMRect)?.height - _size
        : (rect as DOMRect)?.width - _size
      _offset =
        moveOffset +
        (active === childCount - 1 && !propSwiper.loop ? -val / 2 : val / 2)
    }
    target.style.transitionDuration = `${
      _swiper.current.moving ? 0 : propSwiper.duration
    }ms`
    target.style[isVertical ? 'height' : 'width'] = `${
      Number(size) * childCount
    }px`
    target.style[isVertical ? 'width' : 'height'] = `${
      isVertical ? width : height
    }px`
    target.style.transform = `translate3D${
      !isVertical ? `(${_offset}px,0,0)` : `(0,${_offset}px,0)`
    }`
  }

  const onTouchStart = (e) => {
    if (propSwiper.isPreventDefault) e.preventDefault()
    if (propSwiper.isStopPropagation) e.stopPropagation()
    if (!propSwiper.touchable) return
    touchStart(e)
    touch.touchTime = Date.now()
    stopAutoPlay()
    resettPosition()
  }

  const onTouchMove = (e) => {
    if (propSwiper.touchable && _swiper.current.moving) {
      touchMove(e)
      if (touch.stateDirection === propSwiper.direction) {
        move({
          offset: touch.delta,
        })
      }
    }
  }

  const onTouchEnd = () => {
    if (!propSwiper.touchable || !_swiper.current.moving) return
    const speed = touch.delta / (Date.now() - touch.touchTime)
    const isShouldMove =
      Math.abs(speed) > 0.3 || Math.abs(touch.delta) > +(size / 2).toFixed(2)
    let pace = 0
    _swiper.current.moving = false
    if (isShouldMove && touch.stateDirection === propSwiper.direction) {
      const offset = isVertical ? touch.offsetY : touch.offsetX
      if (propSwiper.loop) {
        if (offset > 0) {
          pace = touch.delta > 0 ? -1 : 1
        } else {
          pace = 0
        }
      } else {
        pace = -Math[touch.delta > 0 ? 'ceil' : 'floor'](touch.delta / size)
      }
      move({
        pace,
        isEmit: true,
      })
    } else if (touch.delta) {
      move({ pace: 0 })
    } else {
      getStyle()
    }
    autoplay()
  }

  useEffect(() => {
    _swiper.current.activePagination = (active + childCount) % childCount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const queryRect = (element: any): Promise<any> => {
    return new Promise((resolve) => {
      const query = createSelectorQuery()

      query.select(`#${(element as any).id}`) &&
        query.select(`#${(element as any).id}`).boundingClientRect()
      query.exec(function (res: any) {
        resolve(res[0])
      })
    })
  }

  const init = async (active: number = +propSwiper.initPage) => {
    const rect = await queryRect(container.current)
    const _active = Math.max(Math.min(childCount - 1, active), 0)
    const _width = propSwiper.width ? +propSwiper.width : rect?.width
    const _height = propSwiper.height ? +propSwiper.height : rect?.height
    size = isVertical ? _height : _width
    trackSize = childCount * Number(size)
    const targetOffset = getOffset(_active)
    _swiper.current.moving = true
    if (ready) {
      _swiper.current.moving = false
    }
    setRect(rect)
    setActive(_active)
    setWidth(_width)
    setHeight(_height)
    setOffset(targetOffset)
    setReady(true)
  }

  useEffect(() => {
    if (ready) {
      getStyle()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVertical, width, height, offset, ready])

  useEffect(() => {
    return () => {
      setReady(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    stopAutoPlay()
    autoplay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children])

  useEffect(() => {
    init()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propSwiper.initPage])

  useEffect(() => {
    return () => {
      stopAutoPlay()
    }
  }, [])

  useReady(() => {
    init()
    Taro.nextTick(() => {
      setTimeout(() => {
        stopAutoPlay()
        autoplay()
      }, 16)
    })
  })

  const itemStyle = (index: any) => {
    const style: IStyle = {}
    const _direction = propSwiper.direction || direction
    const _size = size
    if (_size) {
      style[_direction === 'horizontal' ? 'width' : 'height'] = `${_size}px`
    }
    const offset = childOffset[index]

    if (offset) {
      style.transform = `translate3D${
        _direction === 'horizontal' ? `(${offset}px,0,0)` : `(0,${offset}px,0)`
      }`
    }
    return style
  }

  useImperativeHandle(ref, () => ({
    to,
    next,
    prev,
  }))

  return (
    <DataContext.Provider value={parent}>
      <View
        className={`van-swiper ${className}`}
        ref={container}
        {...rest}
        id={'container-' + refRandomId}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        // @ts-ignore
        catchMove={isVertical}
        style={{
          ...style,
          height: height,
        }}
      >
        <View className={contentClass} ref={innerRef}>
          {Children.map(childs, (child: any, index: number) => {
            return (
              <View
                className={'van-swiper-item-wrapper'}
                style={itemStyle(index)}
                key={index}
              >
                {child}
              </View>
            )
          })}
          {process.env.TARO_ENV !== 'h5' && (
            <View className={'van-swiper-item-wrapper'} style={itemStyle(0)}>
              {childs && childs.length ? childs[0] : ''}
            </View>
          )}
        </View>
        {propSwiper.paginationVisible && !('pageContent' in propSwiper) ? (
          <View
            className={classNames({
              ['van-swiper__pagination']: true,
              ['van-swiper__pagination-vertical']: isVertical,
            })}
          >
            {Children.map(childs, (_, index: number) => {
              return (
                <Text
                  style={
                    (active + childCount) % childCount === index
                      ? {
                          backgroundColor: propSwiper.paginationColor,
                        }
                      : undefined
                  }
                  className={classNames({
                    ['van-swiper__pagination-item']: true,
                    active: (active + childCount) % childCount === index,
                  })}
                  key={index}
                />
              )
            })}
          </View>
        ) : (
          <View>{pageContent}</View>
        )}
      </View>
    </DataContext.Provider>
  )
}
export const Swiper_ = forwardRef(Swiper)

export default Swiper_
