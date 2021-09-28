import { View, Input } from '@tarojs/components'
import { useCallback, useEffect, useState, useRef } from 'react'
import * as utils from '../wxs/utils'
import { isDef } from '../common/validator.js'
import { StepperProps } from './../../../types/stepper'
import * as computed from './wxs'
const LONG_PRESS_START_TIME = 600
const LONG_PRESS_INTERVAL = 200
// add num and avoid float number
function add(num1: number, num2: number) {
  const cardinal = Math.pow(10, 10)
  return Math.round((num1 + num2) * cardinal) / cardinal
}
function equal(value1: any, value2: any) {
  return String(value1) === String(value2)
}

export default function Index(props: StepperProps) {
  const {
    theme,
    value,
    integer = 'check',
    disabled,
    inputWidth,
    buttonSize,
    asyncChange,
    disableInput,
    decimalLength,
    min = 1,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
    showPlus = true,
    showMinus = true,
    disablePlus,
    disableMinus,
    longPress = true,
    className,
    onFocus,
    onChange,
    onBlur,
    onOverlimit,
    onPlus,
    renderMinus,
    renderPlus,
    ...others
  } = props
  const [currentValue, setCurrentValue] = useState<any>(undefined)
  const eventTypeRef = useRef('')
  const longPressTimerRef = useRef<any>(0)
  const isLongPressRef = useRef(false)
  // filter illegal characters
  const _filter = useCallback(
    (value) => {
      value = String(value).replace(/[^0-9.-]/g, '')
      if (integer && value.indexOf('.') !== -1) {
        value = value.split('.')[0]
      }
      return value
    },
    [integer],
  )
  // limit value range
  const _format = useCallback(
    (value) => {
      value = _filter(value)
      // format range
      value = value === '' ? 0 : +value
      value = Math.max(Math.min(+max, value), +min)
      // format decimal
      if (isDef(decimalLength)) {
        value = value.toFixed(decimalLength)
      }
      return value
    },
    [decimalLength, _filter, max, min],
  )

  const _check = useCallback(() => {
    const val = _format(currentValue)
    if (!equal(val, currentValue)) {
      setCurrentValue(val)
    }
  }, [currentValue, _format])
  const _isDisabled = useCallback(
    (type) => {
      if (type === 'plus') {
        return disabled || disablePlus || currentValue >= max
      }
      return disabled || disableMinus || currentValue <= min
    },
    [currentValue, disableMinus, disablePlus, disabled, max, min],
  )
  const _emitChange = useCallback(
    (value) => {
      if (!asyncChange) {
        setCurrentValue(value)
      }
      onChange?.(value)
    },
    [asyncChange, onChange],
  )
  const _onInput = useCallback(
    (event) => {
      const { value = '' } = event.detail || {}
      // allow input to be empty
      if (value === '') {
        return
      }
      let formatted = _filter(value)
      // limit max decimal length
      if (isDef(decimalLength) && formatted.indexOf('.') !== -1) {
        const pair = formatted.split('.')
        formatted = `${pair[0]}.${pair[1].slice(0, decimalLength)}`
      }
      _emitChange(formatted)
    },
    [decimalLength, _emitChange, _filter],
  )

  const _onFocus = useCallback(
    (event) => {
      onFocus?.(event.detail)
    },
    [onFocus],
  )
  const _onBlur = useCallback(
    (event) => {
      const value = _format(event.detail.value)
      _emitChange(value)
      onBlur?.(Object.assign(Object.assign({}, event.detail), { value }))
    },
    [_emitChange, _format, onBlur],
  )
  const _onChange = useCallback(() => {
    if (_isDisabled(eventTypeRef.current)) {
      onOverlimit?.(eventTypeRef.current)
      return
    }
    const diff = eventTypeRef.current === 'minus' ? -step : +step
    const value = _format(add(+currentValue, diff))
    _emitChange(value)
    if (eventTypeRef.current === 'plus') {
      onPlus?.()
    }
    // type?.()
  }, [
    currentValue,
    _emitChange,
    _format,
    _isDisabled,
    onOverlimit,
    onPlus,
    step,
  ])
  const _longPressStep = useCallback(() => {
    longPressTimerRef.current = setTimeout(() => {
      _onChange()
      _longPressStep()
    }, LONG_PRESS_INTERVAL)
  }, [_onChange])
  const _onTap = useCallback(
    (event) => {
      const { type } = event.currentTarget.dataset
      eventTypeRef.current = type
      _onChange()
    },
    [_onChange],
  )
  const _onTouchStart = useCallback(
    (event) => {
      if (!longPress) {
        return
      }
      clearTimeout(longPressTimerRef.current)
      const { type } = event.currentTarget.dataset
      eventTypeRef.current = type
      isLongPressRef.current = false
      longPressTimerRef.current = setTimeout(() => {
        isLongPressRef.current = true
        _onChange()
        _longPressStep()
      }, LONG_PRESS_START_TIME)
    },
    [longPress, _longPressStep, _onChange],
  )
  const _onTouchEnd = useCallback(() => {
    if (!longPress) {
      return
    }
    clearTimeout(longPressTimerRef.current)
  }, [longPress])
  useEffect(() => {
    if (!equal(value, currentValue)) {
      setCurrentValue(_format(value))
    }
  }, [_format, value])
  useEffect(() => {
    _check()
  }, [decimalLength, min, max, integer, _check])
  return (
    <View
      className={utils.bem('stepper', [theme]) + ` ${className || ''}`}
      {...others}
    >
      {showMinus && (
        <View
          data-type="minus"
          style={computed.buttonStyle({
            buttonSize,
          })}
          className={
            'minus-class ' +
            utils.bem('stepper__minus', {
              disabled: disabled || disableMinus || currentValue <= min,
            })
          }
          hoverClass="van-stepper__minus--hover"
          // hoverStayTime="70"
          onClick={_onTap}
          onTouchStart={_onTouchStart}
          onTouchEnd={_onTouchEnd}
        >
          {renderMinus}
        </View>
      )}
      <Input
        type={integer ? 'number' : 'digit'}
        className={
          'input-class ' +
          utils.bem('stepper__input', {
            disabled: disabled || disableInput,
          })
        }
        style={computed.inputStyle({
          buttonSize,
          inputWidth,
        })}
        value={currentValue}
        // focus={focus}
        disabled={disabled || disableInput}
        onInput={_onInput}
        onFocus={_onFocus}
        onBlur={_onBlur}
      ></Input>
      {showPlus && (
        <View
          data-type="plus"
          style={computed.buttonStyle({
            buttonSize,
          })}
          className={
            'plus-class ' +
            utils.bem('stepper__plus', {
              disabled: disabled || disablePlus || currentValue >= max,
            })
          }
          hoverClass="van-stepper__plus--hover"
          // hoverStayTime="70"
          onClick={_onTap}
          onTouchStart={_onTouchStart}
          onTouchEnd={_onTouchEnd}
        >
          {renderPlus}
        </View>
      )}
    </View>
  )
}
