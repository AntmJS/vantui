import { ITouchEvent, View, CustomWrapper } from '@tarojs/components'
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react'
import * as utils from '../wxs/utils'
import { SwipeCellProps, ISwiperCellInstance } from '../../types/swipe-cell'
import { range } from '../common/utils'

const THRESHOLD = 0.3
let ARRAY: any[] = []
const MIN_DISTANCE = 10
function getDirection(x: number, y: number) {
  if (x > y && x > MIN_DISTANCE) {
    return 'horizontal'
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical'
  }
  return ''
}

function Index(
  props: SwipeCellProps,
  ref: React.ForwardedRef<ISwiperCellInstance>,
) {
  const [wrapperStyle, setWrapperStyle] = useState<React.CSSProperties>({})
  const [offset, setOffset] = useState<number>(0)
  const [instanceKey, setInstanceKey] = useState<any>({})
  const [touchState, setTouchState] = useState<any>({})
  const [startOffset, setStartOffset] = useState<number>(0)

  const {
    leftWidth = 0,
    rightWidth = 0,
    style,
    className,
    disabled,
    name = '',
    onClick,
    onOpen,
    onClose,
    asyncClose,
    children,
    renderRight,
    renderLeft,
    ...others
  } = props

  const swipeMove = useCallback(
    function (offset2 = 0, dragging?: boolean) {
      const offset_ = range(offset2, -rightWidth, leftWidth)
      setOffset(offset_)
      const transform = `translate3d(${offset_}px, 0, 0)`
      const transition = dragging
        ? 'none'
        : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)'
      const wrapperStyle_ = {
        ...wrapperStyle,
        '-webkit-transform': transform,
        '-webkit-transition': transition,
        transform: transform,
        transition: transition,
      }
      setWrapperStyle(wrapperStyle_)
    },
    [leftWidth, rightWidth, wrapperStyle],
  )

  const close = useCallback(
    function () {
      swipeMove(0)
    },
    [swipeMove],
  )

  useEffect(
    function () {
      const k = new Date()
      if (JSON.stringify(instanceKey) === '{}') {
        setInstanceKey({
          key: k,
          close,
        })
        ARRAY.push({
          key: k,
          close,
        })
      }
    },
    [close, instanceKey],
  )

  useEffect(function () {
    return function () {
      ARRAY = ARRAY.filter((item) => item.key !== instanceKey.key)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const resetTouchStatus = useCallback(
    function () {
      setTouchState({
        ...touchState,
        direction: '',
        deltaX: 0,
        deltaY: 0,
        offsetX: 0,
        offsetY: 0,
      })
    },
    [touchState],
  )

  const touchStart = useCallback(
    function (event) {
      resetTouchStatus()
      const touch = event.touches[0]
      setTouchState({
        ...touchState,
        startX: touch.clientX,
        startY: touch.startY,
      })
    },
    [touchState, resetTouchStatus],
  )

  const touchMove = useCallback(
    function (event) {
      resetTouchStatus()
      const touch = event.touches[0]
      const newTouchState = {
        ...touchState,
        direction:
          touchState.direction ||
          getDirection(touchState.offsetX, touchState.offsetY),
        deltaX: touch.clientX - (touchState.startX || 0),
        deltaY: touch.clientY - (touchState.startY || 0),
        offsetX: Math.abs(touchState.deltaX),
        offsetY: Math.abs(touchState.deltaY),
      }
      setTouchState(newTouchState)
      return newTouchState
    },
    [touchState, resetTouchStatus],
  )

  const open = useCallback(
    function (position) {
      const offset = position === 'left' ? leftWidth : -rightWidth
      swipeMove(offset)
      if (onOpen) {
        const e = {
          detail: {
            position,
            name: name,
          },
        } as ITouchEvent
        onOpen(e)
      }
    },
    [leftWidth, onOpen, rightWidth, swipeMove, name],
  )

  const swipeLeaveTransition = useCallback(
    function () {
      if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
        open('right')
      } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
        open('left')
      } else {
        swipeMove(0)
      }
    },
    [leftWidth, offset, open, rightWidth, swipeMove],
  )

  const onClick_ = useCallback(
    function (event) {
      event.stopPropagation()
      event.preventDefault()
      const { key: position = 'outside' } = event.currentTarget.dataset
      Object.defineProperty(event, 'detail', {
        value: {
          position,
          name: name,
          instance: {
            close,
            open,
          },
        },
      })
      if (onClick) onClick(event)
      if (asyncClose && onClose) {
        onClose(event)
      } else if (onClose) {
        onClose(event)
        swipeMove(0)
      } else {
        swipeMove(0)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [asyncClose, onClick, onClose, swipeMove],
  )

  const startDrag = useCallback(
    function (event) {
      if (disabled) return
      setStartOffset(offset)
      touchStart(event)
    },
    [disabled, offset, touchStart],
  )

  const onDrag = useCallback(
    function (event) {
      if (disabled) return
      const touchState = touchMove(event)
      ARRAY.filter((item) => item.key !== instanceKey.key).forEach((item) =>
        item.close(),
      )
      swipeMove(startOffset + touchState.deltaX, true)
    },
    [disabled, instanceKey.key, startOffset, swipeMove, touchMove],
  )

  const endDrag = useCallback(
    function () {
      if (disabled) return
      swipeLeaveTransition()
    },
    [disabled, swipeLeaveTransition],
  )

  useImperativeHandle(ref, function () {
    return {
      close,
      open,
    }
  })

  const MAIN_RENDER = (
    <View
      className={`van-swipe-cell  ${className}`}
      data-key="cell"
      style={utils.style([style])}
      onClick={onClick_}
      onTouchStart={startDrag}
      onTouchMove={onDrag}
      onTouchEnd={endDrag}
      onTouchCancel={endDrag}
      {...others}
    >
      <View style={wrapperStyle as any}>
        {leftWidth ? (
          <View
            className="van-swipe-cell__left"
            data-key="left"
            onClick={onClick_}
            style={{ width: leftWidth + 'px' }}
          >
            {renderLeft}
          </View>
        ) : (
          ''
        )}
        {children}
        {rightWidth ? (
          <View
            className="van-swipe-cell__right"
            data-key="right"
            onClick={onClick_}
            style={{ width: rightWidth + 'px' }}
          >
            {renderRight}
          </View>
        ) : (
          ''
        )}
      </View>
    </View>
  )

  if (process.env.TARO_ENV === 'weapp') {
    return <CustomWrapper>{MAIN_RENDER}</CustomWrapper>
  } else return <>{MAIN_RENDER}</>
}

const SwipeCell = forwardRef(Index)
export { SwipeCell }
export default SwipeCell
