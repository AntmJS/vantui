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
  useCallback,
} from 'react'
import classNames from 'classnames'
import {
  createSelectorQuery,
  nextTick,
  useDidShow,
  useDidHide,
} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { SwiperProps, SwiperInstance } from '../../types/swiper'
import { getDirection } from './utils'

const defaultProps = {
  width: 0,
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
  // infinite: true,
} as SwiperProps

const getValidNumber = (num) => {
  if (typeof num === 'number') {
    return num
  } else if (typeof num === 'string') {
    return isNaN(Number(num.replace('px', '')))
      ? 0
      : Number(num.replace('px', ''))
  } else return 0
}

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
    initPage = 0,
    paginationColor,
    paginationVisible,
    touchable,
    isPreventDefault,
    isStopPropagation,
    autoPlay,
    isCenter,
    style,
    height,
    width,
    loop,
    duration,
    containerSize,
    ...rest
  } = propSwiper
  const isVertical = direction === 'vertical'
  const timer = useRef<any>(null)
  const containerRef = useRef<any>(null)
  const innerRef = useRef<any>(null)
  const [refRandomId] = useState(Math.random().toString(36).slice(-8))
  const [moving, setmoving] = useState(false)
  // eslint-disable-next-line prefer-const
  let [active, setActive_] = useState(
    typeof initPage === 'number' ? initPage : 0,
  )
  const setActive = (a) => {
    active = a
    setActive_(a)
  }
  const [W, setW] = useState(getValidNumber(width))
  const [H, setH] = useState(getValidNumber(height))
  const [showToDo, setShowToDo] = useState(false)
  const [touch] = useState({
    startX: 0,
    startY: 0,
    deltaX: 0,
    deltaY: 0,
    offsetX: 0,
    offsetY: 0,
    stateDirection: '',
    delta: 0,
  })

  const size = useMemo(() => {
    return isVertical ? H : W
  }, [H, W, isVertical])

  const { childs, childCount } = useMemo(() => {
    let childCount = 0
    const childs = Children.map(children, (child) => {
      if (!isValidElement(child)) return null
      childCount++
      return child
    })
    return {
      childs,
      childCount,
    }
  }, [children])

  // 重置 全部位移信息
  const touchReset = useCallback(() => {
    touch.startX = 0
    touch.startY = 0
    touch.deltaX = 0
    touch.deltaY = 0
    touch.offsetX = 0
    touch.offsetY = 0
    touch.delta = 0
    touch.stateDirection = ''
  }, [touch])

  // 取值 方法
  const range = useCallback((num: number, min: number, max: number) => {
    return Math.min(Math.max(num, min), max)
  }, [])

  const getMinOffset = useCallback(() => {
    return size - Number(size) * childCount
  }, [childCount, size])

  // 计算位移
  const getOffset = useCallback(
    (active: number, offset = 0) => {
      const minOffset = getMinOffset()

      let currentPosition = active * Number(size)
      if (!loop) {
        currentPosition = Math.min(currentPosition, -minOffset)
      }
      let targetOffset = offset - currentPosition
      if (!loop) {
        targetOffset = range(targetOffset, minOffset, 0)
      }
      return targetOffset
    },
    [getMinOffset, loop, range, size],
  )

  const wrapperStyle = useMemo(() => {
    const style: React.CSSProperties = {}
    if (isVertical) {
      style.height = size * childCount ? `${size * childCount}px` : '100%'
    } else {
      style.width = size * childCount ? `${size * childCount}px` : '100%'
    }

    return style
  }, [childCount, isVertical, size])

  const contentClass = classNames({
    ['van-swiper__inner']: true,
    ['van-swiper__vertical']: isVertical,
  })

  const touchStart = useCallback(
    (e) => {
      if (moving) return
      touchReset()
      touch.startX = e?.touches[0]?.clientX || 0
      touch.startY = e?.touches[0]?.clientY || 0
    },
    [moving, touch, touchReset],
  )

  // 触摸事件移动
  const touchMove = useCallback(
    (e) => {
      if (timer.current) {
        clearInterval(timer.current)
        timer.current = null
      }
      if (moving) return
      touch.deltaX = (e?.touches[0]?.clientX || 0) - touch.startX
      touch.deltaY = (e?.touches[0]?.clientY || 0) - touch.startY
      touch.offsetX = Math.abs(touch.deltaX)
      touch.offsetY = Math.abs(touch.deltaY)
      touch.delta = isVertical ? touch.deltaY : touch.deltaX
      if (!touch.stateDirection) {
        touch.stateDirection = getDirection(touch.offsetX, touch.offsetY)
      }
      const offset = getOffset(active) + touch.delta
      innerRef.current.style.transitionDuration = `0ms`
      if (isVertical) {
        innerRef.current.style.transform = `translate3d(0, ${offset}px, 0)`
      } else {
        innerRef.current.style.transform = `translate3d(${offset}px, 0, 0)`
      }
    },
    [moving, touch, isVertical, getOffset, active],
  )

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setInnertStyle = (active, _duration, delta = 0) => {
    const offset = delta || getOffset(active)
    innerRef.current.style.transitionDuration = `${_duration}ms`
    if (isVertical) {
      innerRef.current.style.transform = `translate3d(0, ${offset}px, 0)`
    } else {
      innerRef.current.style.transform = `translate3d(${offset}px, 0, 0)`
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const moveTo = (activeNew, touchEnd?: boolean, callback?) => {
    setmoving(true)
    if (activeNew === active && !touchEnd) return
    // 手动滑动的变更
    if (touchEnd) {
      const step = Math.ceil(Math.abs(touch.delta / size))
      if (touch.delta > 0) {
        activeNew = active - step
        activeNew = activeNew < 0 ? childCount - 1 : activeNew
      } else if (touch.delta < 0) {
        activeNew = active + step
        activeNew = activeNew > childCount - 1 ? 0 : activeNew
      }
    }
    let _duration = duration
    let timeout = 0
    // 第一张和最后一样的特殊情况
    if (active === 0 && activeNew === childCount - 1) {
      _duration = 0
      timeout = duration || 0 + 16.66
      setInnertStyle(active, duration, size)
    } else if (active === childCount - 1 && activeNew === 0) {
      _duration = 0
      timeout = duration || 0 + 16.66
      setInnertStyle(active, duration, -childCount * size)
    }
    setTimeout(() => {
      setmoving(false)
      setActive(activeNew)
      setInnertStyle(activeNew, _duration)
      callback?.()
    }, timeout)
  }

  const startPlay = useCallback(() => {
    if (autoPlay && autoPlay !== '0') {
      timer.current = setInterval(() => {
        moveTo(active + 1 > childCount - 1 ? 0 : active + 1)
      }, Number(autoPlay))
    }
  }, [active, autoPlay, childCount, moveTo])

  const onTouchEnd = useCallback(() => {
    if (!touchable) return
    if (touch.stateDirection === direction) {
      moveTo(active, true, () => {
        startPlay()
      })
    }
  }, [touchable, touch.stateDirection, direction, moveTo, active, startPlay])

  const itemStyle = useCallback(
    (index) => {
      if (childCount === 1) {
        return {
          transform: `translate3d(0, 0, 0)`,
          transitionDuration: `0ms`,
        }
      }
      if (index === 0 && active === childCount - 1) {
        if (isVertical) {
          return {
            transform: `translate3d(0, ${size * childCount}px, 0)`,
            transitionDuration: `0ms`,
          }
        } else {
          return {
            transform: `translate3d(${size * childCount}px, 0, 0)`,
            transitionDuration: `0ms`,
          }
        }
      } else if (index === childCount - 1 && active === 0) {
        if (isVertical) {
          return {
            transform: `translate3d(0, ${-size * childCount}px, 0)`,
            transitionDuration: `0ms`,
          }
        } else {
          return {
            transform: `translate3d(${-size * childCount}px, 0, 0)`,
            transitionDuration: `0ms`,
          }
        }
      }

      return {}
    },
    [active, childCount, isVertical, size],
  )

  useImperativeHandle(ref, () => ({
    to: (n) => moveTo(n),
    prev: () => moveTo(active - 1 < 0 ? childCount - 1 : active - 1),
    next: () => moveTo(active + 1 > childCount - 1 ? 0 : active + 1),
  }))

  useEffect(() => {
    onChange?.(active)
  }, [active, onChange])

  useDidShow(() => {
    setShowToDo(true)
  })

  useEffect(() => {
    setShowToDo(true)

    return () => {
      setShowToDo(false)
      clearInterval(timer.current)
    }
  }, [])

  useDidHide(() => {
    setShowToDo(false)
    clearInterval(timer.current)
  })

  useEffect(() => {
    if (showToDo) {
      nextTick(() => {
        // h5环境容器宽度100%渲染延迟
        setTimeout(() => {
          createSelectorQuery()
            .select('#container-' + refRandomId)
            .boundingClientRect()
            .exec((ret) => {
              if (ret && ret[0]) {
                if (!W) setW(ret[0].width)
                if (!H) setH(ret[0].height)
              }
            })
        }, 100)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showToDo])

  useEffect(() => {
    if (size) {
      if (active) {
        setInnertStyle(active, 0)
      }
      clearInterval(timer.current)
      if (childCount > 1) startPlay()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, childCount])

  const containerStyle = useMemo(() => {
    const _style = {
      width: W || '100%',
      height: H || '100%',
      ...style,
    }
    if (containerSize) {
      _style[isVertical ? 'height' : 'width'] = containerSize
    }

    return _style
  }, [H, W, containerSize, isVertical])

  return (
    <View
      className={`van-swiper ${className}`}
      ref={containerRef}
      {...rest}
      id={'container-' + refRandomId}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={onTouchEnd}
      // @ts-ignore
      catchMove={isVertical}
      style={containerStyle}
    >
      <View className={contentClass} style={wrapperStyle} ref={innerRef}>
        {Children.map(childs, (child: any, index: number) => {
          return (
            <View
              className={'van-swiper-item-wrapper'}
              key={index}
              style={{
                width: W || '100%',
                height: H || '100%',
                ...itemStyle(index),
              }}
            >
              {child}
            </View>
          )
        })}
      </View>
      {paginationVisible && !('pageContent' in propSwiper) ? (
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
                        backgroundColor: paginationColor,
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
  )
}
export const Swiper_ = forwardRef(Swiper)

export default Swiper_
