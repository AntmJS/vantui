import { nextTick } from '@tarojs/taro'
import { useState, useEffect, useRef } from 'react'
import { View, Textarea, Input } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { FieldProps } from '../../types/field'
import { Cell } from '../cell'
import { Icon } from '../icon'
import { resizeTextarea } from '../utils'
import * as computed from './wxs'

let FIELD_INDEX = 0

export function Field(props: FieldProps) {
  const ref: React.MutableRefObject<{
    focused: boolean
  }> = useRef({
    focused: false,
  })
  const [state, setState] = useState({
    // innerValue: '',
    showClear: false,
    unitag: 'van-field',
  })
  const [innerValue, setInnerValue] = useState('')
  const { showClear } = state
  const {
    size,
    leftIcon,
    center,
    border = true,
    isLink,
    required,
    clickable,
    className,
    titleWidth = '6.2em',
    style,
    arrowDirection,
    label,
    disabled,
    type = 'text',
    inputAlign,
    clearIcon = 'clear',
    rightIcon,
    icon,
    iconClass,
    value,
    maxlength,
    showWordLimit,
    errorMessageAlign,
    error,
    errorMessage,
    fixed,
    focus,
    cursor = -1,
    autoFocus,
    readonly,
    placeholder,
    placeholderStyle,
    placeholderClass,
    autosize,
    cursorSpacing = 50,
    adjustPosition = true,
    showConfirmBar = true,
    holdKeyboard,
    selectionEnd = -1,
    selectionStart = -1,
    alwaysEmbed,
    disableDefaultPadding = true,
    confirmType,
    confirmHold,
    password,
    clearable,
    clearTrigger = 'focus',
    renderLeftIcon,
    renderTitle,
    renderInput,
    renderRightIcon,
    renderIcon,
    renderButton,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onConfirm,
    onInput,
    onClickInput,
    onClickIcon,
    onLineChange,
    onKeyboardHeightChange,
  } = props

  useEffect(() => {
    setState((state) => {
      return {
        ...state,
        unitag: `van-field_uni_${FIELD_INDEX++}`,
      }
    })
  }, [])

  const adjustTextareaSize = () => {
    const taroTextarea: any = document.querySelector(`.${state.unitag}`)
    const textarea = taroTextarea?.children?.[0]

    if (type === 'textarea' && autosize && textarea) {
      // 须等待textarea渲染value才有滚动高度
      setTimeout(() => {
        resizeTextarea(textarea, autosize)
      })
    }
  }

  const emitChange = function (event?: any) {
    event = event || { detail: { value: '' } }
    Object.defineProperty(event, 'detail', {
      value: event.detail.value,
    })
    setInnerValue(event.detail || '')
    nextTick(() => {
      onInput?.(event)
      onChange?.(event)
    })
  }

  const setShowClear = function (value: any) {
    let showClear = false
    if (clearable && !readonly) {
      const hasValue = !!value
      const trigger =
        clearTrigger === 'always' ||
        (clearTrigger === 'focus' && ref.current.focused)
      showClear = hasValue && trigger
    }
    setState((pre: any) => {
      return { ...pre, showClear }
    })
  }

  const _input = function (event: any) {
    const { value = '' } = event.detail || {}
    setShowClear(value)
    emitChange(event)

    if (process.env.TARO_ENV === 'weapp') return value // 微信2.1优化输入性能
  }
  const _focus = function (event: any) {
    ref.current.focused = true
    setTimeout(() => {
      setShowClear(innerValue)
    })
    Object.defineProperty(event, 'detail', {
      value: event.detail.value,
    })
    onFocus?.(event)
  }
  const _blur = function (event: any) {
    ref.current.focused = false
    setShowClear(innerValue)
    Object.defineProperty(event, 'detail', {
      value: event.detail.value,
    })
    onBlur?.(event)
  }
  const _clear = function () {
    setInnerValue('')
    setShowClear('')
    nextTick(() => {
      emitChange()
      onClear?.()
    })
  }
  const _confirm = function (event: any) {
    const { value = '' } = event.detail || {}
    setShowClear(value)
    Object.defineProperty(event, 'detail', {
      value: event.detail.value,
    })
    onConfirm?.(event)
  }
  // setValue(value) {
  //   this.value = value
  //   this.setShowClear()
  //   if (value === '') {
  //     this.setData({ innerValue: '' })
  //   }
  //   this.emitChange()
  // },

  useEffect(
    function () {
      setShowClear(innerValue)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [readonly, clearable],
  )

  useEffect(
    function () {
      setInnerValue((value ?? '') as string)
    },
    [value],
  )

  useEffect(() => {
    if (process.env.TARO_ENV === 'h5' && innerValue) {
      adjustTextareaSize()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [innerValue])

  return (
    <Cell
      size={size}
      icon={leftIcon}
      center={center}
      border={border}
      isLink={isLink}
      required={required}
      clickable={clickable}
      titleWidth={titleWidth}
      titleStyle={{ marginRight: '12px' }}
      style={style}
      arrowDirection={arrowDirection}
      className={'van-field ' + `${className || ''}`}
      renderIcon={<>{renderLeftIcon}</>}
      renderTitle={
        <>
          {label ? (
            <View
              className={
                'label-class ' +
                utils.bem('field__label', {
                  disabled,
                })
              }
            >
              {label}
            </View>
          ) : (
            renderTitle
          )}
        </>
      }
    >
      <View className={utils.bem('field__body', [type])}>
        <View
          className={utils.bem('field__control', [inputAlign, 'custom'])}
          onClick={onClickInput}
        >
          {renderInput}
        </View>
        {type === 'textarea' ? (
          <Textarea
            className={
              utils.bem('field__control', [
                inputAlign,
                type,
                {
                  disabled,
                  error,
                },
              ]) +
              ` input-class ${autosize ? 'autosize' : ''} ${state.unitag}` +
              `${
                process.env.TARO_ENV !== 'weapp' && autosize
                  ? ' autosize-height'
                  : ''
              }`
            }
            fixed={fixed}
            focus={focus}
            cursor={cursor}
            value={innerValue}
            autoFocus={autoFocus}
            disabled={disabled || readonly}
            maxlength={maxlength}
            placeholder={placeholder}
            placeholderStyle={placeholderStyle}
            placeholderClass={`${utils.bem('field__placeholder', {
              error,
              disabled,
            })} ${placeholderClass || ''}`}
            // eslint-disable-next-line
            // @ts-ignore
            nativeProps={autosize ? { rows: 1 } : {}}
            autoHeight={!!autosize}
            style={computed.inputStyle(autosize)}
            cursorSpacing={cursorSpacing}
            adjustPosition={adjustPosition}
            showConfirmBar={showConfirmBar}
            holdKeyboard={holdKeyboard}
            selectionEnd={selectionEnd}
            selectionStart={selectionStart}
            disableDefaultPadding={disableDefaultPadding}
            onInput={_input}
            onClick={onClickInput}
            onBlur={_blur}
            onFocus={_focus}
            onConfirm={_confirm}
            onLineChange={onLineChange}
            onKeyboardHeightChange={onKeyboardHeightChange}
            showCount=""
          ></Textarea>
        ) : (
          <Input
            className={
              utils.bem('field__control', [
                inputAlign,
                {
                  disabled,
                  error,
                },
              ]) + ' input-class'
            }
            // eslint-disable-next-line
            // @ts-ignore
            type={type}
            focus={focus}
            cursor={cursor}
            value={innerValue}
            autoFocus={autoFocus}
            disabled={disabled || readonly}
            maxlength={maxlength}
            placeholder={placeholder}
            placeholderStyle={placeholderStyle}
            placeholderClass={`${utils.bem('field__placeholder', {
              error,
              disabled,
            })} ${placeholderClass || ''}`}
            confirmType={confirmType}
            confirmHold={confirmHold}
            holdKeyboard={holdKeyboard}
            cursorSpacing={cursorSpacing}
            adjustPosition={adjustPosition}
            selectionEnd={selectionEnd}
            selectionStart={selectionStart}
            alwaysEmbed={alwaysEmbed}
            password={password || type === 'password'}
            onInput={_input}
            onClick={onClickInput}
            onBlur={_blur}
            onFocus={_focus}
            onConfirm={_confirm}
            onKeyboardHeightChange={onKeyboardHeightChange}
          ></Input>
        )}
        {showClear && (
          <Icon
            name={clearIcon}
            className="van-field__clear-root van-field__icon-root"
            onTouchStart={_clear}
          ></Icon>
        )}
        <View className="van-field__icon-container" onClick={onClickIcon}>
          {(rightIcon || icon) && (
            <Icon
              name={(rightIcon || icon)!}
              className={
                'van-field__icon-root ' + iconClass + ' right-icon-class'
              }
            ></Icon>
          )}
          {renderRightIcon}
          {renderIcon}
        </View>
        <View className="van-field__button">{renderButton}</View>
      </View>
      {showWordLimit && maxlength && (
        <View className="van-field__word-limit">
          <View
            className={utils.bem('field__word-num', {
              full: innerValue.length >= maxlength,
            })}
          >
            {innerValue.length >= maxlength ? maxlength : innerValue.length}
          </View>
          {'/' + maxlength}
        </View>
      )}
      {errorMessage && (
        <View
          className={utils.bem('field__error-message', [
            errorMessageAlign,
            {
              disabled,
              error,
            },
          ])}
        >
          {errorMessage}
        </View>
      )}
    </Cell>
  )
}
export default Field
