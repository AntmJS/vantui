import { ITouchEvent, View } from '@tarojs/components'
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { nextTick } from '@tarojs/taro'
import * as utils from '../wxs/utils'
import { SwipeCellProps, ISwiperCellInstance } from '../../types/swipe-cell'
import { range } from '../common/utils'

let ARRAY: any[] = []
const MIN_DISTANCE = 20
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
  const [THRESHOLD, setTHRESHOLD] = useState({
    left: 0.2,
    right: 0.2,
  })

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
      if (offset2 === 0) {
        setTHRESHOLD({
          left: 0.2,
          right: 0.2,
        })
      }
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
      swipeMove(0, false)
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
        startX: 0,
        startY: 0,
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
        startY: touch.clientY,
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
          getDirection(
            Math.abs(touch.clientX - (touchState.startX || 0)),
            Math.abs(touch.clientY - (touchState.startY || 0)),
          ),
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
      const THRESHOLD_ = {
        left: 0.2,
        right: 0.2,
      }
      if (position === 'left') {
        THRESHOLD_.left = 0.8
      }
      if (position === 'right') {
        THRESHOLD_.right = 0.8
      }
      setTHRESHOLD(THRESHOLD_)
      swipeMove(offset, false)
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
      if (offset > 0) {
        if (leftWidth && offset > THRESHOLD.left * leftWidth) {
          open('left')
        } else {
          swipeMove(0)
        }
      }

      if (offset < 0) {
        if (rightWidth && -offset > THRESHOLD.right * rightWidth) {
          open('right')
        } else {
          swipeMove(0)
        }
      }
    },
    [
      THRESHOLD.left,
      THRESHOLD.right,
      leftWidth,
      offset,
      open,
      rightWidth,
      swipeMove,
    ],
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
      if (!touchState.direction || touchState.direction === 'vertical') {
        return
      }
      ARRAY.filter((item) => item.key !== instanceKey.key).forEach((item) =>
        item.close(true),
      )
      swipeMove(startOffset + touchState.deltaX, true)
    },
    [disabled, instanceKey.key, startOffset, swipeMove, touchMove],
  )

  const endDrag = useCallback(
    function () {
      if (disabled) return
      swipeLeaveTransition()
      nextTick(() => {
        resetTouchStatus()
      })
    },
    [disabled, resetTouchStatus, swipeLeaveTransition],
  )

  useImperativeHandle(ref, function () {
    return {
      close,
      open,
    }
  })

  return (
    <View
      className={`van-swipe-cell  ${className}`}
      data-key="cell"
      style={utils.style([style])}
      // onClick={onClick_}
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
}

const SwipeCell = forwardRef(Index)
export { SwipeCell }
export default SwipeCell
