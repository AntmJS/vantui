import React, { useState, useEffect, useCallback } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { style } from '../wxs/style'
import { SliderProps } from '../../types/slider'
import { canIUseModel } from '../common/version'
import { getRect, addUnit } from '../common/utils'

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
let currentIndex = 0

export function Slider(props: SliderProps) {
  const {
    range,
    disabled,
    activeColor,
    inactiveColor,
    max = 100,
    min = 0,
    step = 1,
    value = 0,
    barHeight,
    vertical = false,
    onDrag,
    onChange,
    onDragStart,
    onDragEnd,
    className = '',
    renderButton,
    renderLeftButton,
    renderRightButton,
    ...others
  } = props

  const [barStyle, setBarStyle] = useState<React.CSSProperties>()
  const [wrapperStyle, setWrapperStyle] = useState<React.CSSProperties>()
  const [value_, setValue] = useState<any>()
  const [dragStatus, setDragStatus] = useState<any>()
  const [buttonIndex, setButtonIndex] = useState<any>()
  const [touchState, setTouchState] = useState<any>({})
  const [newValue, setNewValue] = useState<any>({})
  const [startValue, setstartValue] = useState<any>()
  const [currentIndex_, setCurrentIndex] = useState<number>()

  useEffect(() => {
    setCurrentIndex(currentIndex++)
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

  const isRange = useCallback<any>(
    function (value: any) {
      return range && Array.isArray(value)
    },
    [range],
  )

  const getScope = useCallback(function (max, min) {
    return Number(max) - Number(min)
  }, [])

  const calcMainAxis = useCallback(
    function (value_) {
      const scope = getScope(max, min)
      if (isRange(value_)) {
        return `${((value_[1] - value_[0]) * 100) / scope}%`
      }
      return `${((value_ - Number(min)) * 100) / scope}%`
    },
    [getScope, isRange, max, min],
  )

  const calcOffset = useCallback(
    (value_) => {
      const scope = getScope(max, min)
      if (isRange(value_)) {
        return ((value_[0] - Number(min)) * 100) / scope + '%'
      }
      return '0%'
    },
    [getScope, isRange, max, min],
  )

  const format = useCallback(
    function (value) {
      return Math.round(Math.max(min, Math.min(value, max)) / step) * step
    },
    [max, min, step],
  )

  const handleOverlap = useCallback<any>(function (value: any) {
    if (value[0] > value[1]) {
      return value.slice(0).reverse()
    }
    return value
  }, [])

  const updateValue = useCallback(
    function (value: any, end?: any, drag?: boolean) {
      if (isRange(value)) {
        value = handleOverlap(value).map((val: any) => format(val))
      } else {
        value = format(value)
      }

      const mainAxis = vertical ? 'height' : 'width'

      setValue(value)

      setWrapperStyle({
        background: inactiveColor || '',
        [vertical ? 'width' : 'height']: addUnit(barHeight) || '',
      })
      const styleBar: any = {
        [mainAxis]: calcMainAxis(value),
        left: vertical ? 0 : calcOffset(value),
        top: vertical ? calcOffset(value) : 0,
      }
      if (drag) styleBar.transition = 'none'
      setBarStyle(styleBar)
      drag ? 'transition: none;' : ''
      if (drag && onDrag) {
        onDrag({ detail: { value: value } } as ITouchEvent)
      }
      if (end && onChange) {
        onChange({ detail: value } as ITouchEvent)
      }
      if ((drag || end) && canIUseModel()) {
        setValue(value)
      }
    },
    [
      calcMainAxis,
      format,
      handleOverlap,
      isRange,
      onChange,
      onDrag,
      barHeight,
      calcOffset,
      inactiveColor,
      vertical,
    ],
  )

  useEffect(
    function () {
      setValue(value)
      updateValue(value)
    },
    [value, updateValue],
  )

  const onTouchStart = useCallback(
    function (event: any, index?: number): any {
      if (disabled) return
      if (typeof index === 'number') {
        setButtonIndex(index || 0)
      }
      touchStart(event)
      setstartValue(format(value_))
      setNewValue(value_)
      if (isRange(value_)) {
        setstartValue(value_.map((val: any) => format(val)))
      } else {
        setstartValue(format(value_))
      }
      setDragStatus('start')
    },
    [disabled, format, isRange, touchStart, value_],
  )

  const getRange = useCallback(
    function () {
      return max - min
    },
    [max, min],
  )

  const onTouchMove = useCallback(
    function (event) {
      event.preventDefault()
      if (disabled) return
      if (dragStatus === 'start') {
        if (onDragStart) onDragStart()
      }
      const touchState = touchMove(event)
      setDragStatus('draging')
      getRect(null, `.van-slider${currentIndex_}`).then((rect: any) => {
        const diff = (touchState.deltaX / rect.width) * getRange()
        if (isRange(startValue)) {
          newValue[buttonIndex] = startValue[buttonIndex] + diff
          setNewValue(newValue)
        } else {
          let newValue_ = newValue
          newValue_ = (startValue || 0) + diff
          setNewValue(newValue_)
        }
        updateValue(newValue, false, true)
      })
    },
    [
      buttonIndex,
      disabled,
      dragStatus,
      getRange,
      isRange,
      newValue,
      onDragStart,
      startValue,
      touchMove,
      updateValue,
      currentIndex_,
    ],
  )

  const onTouchEnd = useCallback(
    function () {
      if (disabled) return
      if (dragStatus === 'draging') {
        updateValue(newValue, true)
        if (onDragEnd) onDragEnd()
      }
    },
    [disabled, dragStatus, newValue, onDragEnd, updateValue],
  )

  const onClick = useCallback(
    function (event: any) {
      if (disabled) return
      getRect(null, `.van-slider${currentIndex_}`).then((rect: any) => {
        const value =
          (((event.target.x || event.clientX) - rect.left) / rect.width) *
            getRange() +
          min

        if (isRange(value_)) {
          const [left, right] = value_
          const middle = (left + right) / 2
          if (value <= middle) {
            updateValue([value, right], true)
          } else {
            updateValue([left, value], true)
          }
        } else {
          updateValue(value, true)
        }
      })
    },
    [disabled, getRange, isRange, min, updateValue, value_, currentIndex_],
  )

  return (
    <View
      className={
        ' ' +
        utils.bem('slider', {
          disabled,
          vertical,
        }) +
        ` van-slider${currentIndex_} ` +
        className
      }
      style={utils.style([wrapperStyle, style])}
      onClick={onClick}
      {...others}
    >
      <View
        className={utils.bem('slider__bar')}
        style={style({
          ...barStyle,
          backgroundColor: activeColor,
        })}
      >
        {range && (
          <View
            className={utils.bem('slider__button-wrapper-left')}
            onTouchStart={(e) => onTouchStart(e, 0)}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
          >
            {renderButton ? (
              renderLeftButton ? (
                renderLeftButton(value_ as number)
              ) : (
                ''
              )
            ) : (
              <View className={utils.bem('slider__button')}></View>
            )}
          </View>
        )}
        {range && (
          <View
            className={utils.bem('slider__button-wrapper-right')}
            onTouchStart={(e) => onTouchStart(e, 1)}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
          >
            {renderButton ? (
              renderRightButton ? (
                renderRightButton(value_ as number)
              ) : (
                ''
              )
            ) : (
              <View className={utils.bem('slider__button')}></View>
            )}
          </View>
        )}
        {!range && (
          <View
            className={utils.bem('slider__button-wrapper')}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
          >
            {renderButton ? (
              renderButton?.(value_ as number)
            ) : (
              <View className={utils.bem('slider__button')}></View>
            )}
          </View>
        )}
      </View>
    </View>
  )
}
export default Slider
