import { View, Input } from '@tarojs/components'
import { useCallback, useEffect, useState, useRef } from 'react'
import * as utils from '../wxs/utils'
import { isDef } from '../common/validator'
import { StepperProps } from './../../types/stepper'
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

export function Stepper(props: StepperProps) {
  const {
    theme,
    value,
    integer,
    disabled,
    alwaysEmbed,
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
    onMinus,
    renderMinus,
    renderPlus,
    adjustPosition = true,
    ...others
  } = props
  const [currentValue, setCurrentValue] = useState<any>()
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
      if (!/(.+?)\.$/.test(String(value))) {
        // format range
        value = value === '' ? 0 : +value
        value = Math.max(Math.min(+max, value), +min)
        // format decimal
        if (isDef(decimalLength)) {
          value = value.toFixed(decimalLength)
        }
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
  }, [_format, currentValue])

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
      onChange?.({ detail: value })
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
      onFocus?.(event)
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
  const _onChange = useCallback(
    (currentValue) => {
      if (_isDisabled(eventTypeRef.current)) {
        onOverlimit?.()
        return
      }
      const diff = eventTypeRef.current === 'minus' ? -step : +step
      const value = _format(add(+currentValue, diff))
      _emitChange(value)
      // 不太美观----

      if (eventTypeRef.current === 'plus') {
        onPlus?.()
      } else {
        onMinus?.()
      }

      return value
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      _isDisabled,
      step,
      asyncChange,
      onOverlimit,
      _format,
      onChange,
      onPlus,
      onMinus,
    ],
  )
  const _longPressStep = useCallback(
    (currentValue) => {
      longPressTimerRef.current = setTimeout(
        (t) => {
          const cv = _onChange(t)
          _longPressStep(cv)
        },
        LONG_PRESS_INTERVAL,
        currentValue,
      )
    },
    [_onChange],
  )
  const _onTap = useCallback(
    (event) => {
      const { type } = event.currentTarget.dataset
      eventTypeRef.current = type
      _onChange(currentValue)
    },
    [_onChange, currentValue],
  )
  const _onTouchStart = useCallback(
    (event) => {
      if (!longPress || asyncChange) {
        return
      }
      clearTimeout(longPressTimerRef.current)
      const { type } = event.currentTarget.dataset
      eventTypeRef.current = type
      isLongPressRef.current = false
      longPressTimerRef.current = setTimeout(() => {
        isLongPressRef.current = true
        _onChange(currentValue)
        _longPressStep(currentValue)
      }, LONG_PRESS_START_TIME)
    },
    [longPress, asyncChange, _longPressStep, _onChange, currentValue],
  )
  const _onTouchEnd = useCallback(
    (event) => {
      if (!longPress) {
        return
      }
      if (isLongPressRef.current) {
        event.preventDefault()
      }
      clearTimeout(longPressTimerRef.current)
    },
    [longPress],
  )

  useEffect(() => {
    _check()
  }, [decimalLength, min, max, integer, _check])

  useEffect(() => {
    if (!equal(value, currentValue)) {
      setCurrentValue(_format(value))
    }
    // eslint-disable-next-line
  }, [_format, value])
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
        alwaysEmbed={alwaysEmbed}
        value={currentValue}
        disabled={disabled || disableInput}
        onInput={_onInput}
        onFocus={_onFocus}
        onBlur={_onBlur}
        adjustPosition={adjustPosition}
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
export default Stepper
