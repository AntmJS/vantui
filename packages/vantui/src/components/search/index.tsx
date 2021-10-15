import { useState, useEffect } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import Field from '../field'
import { SearchProps } from '../../../types/search'

export default function Index(props: SearchProps) {
  const [innerValue, setInnerValue]: any = useState('')
  const {
    value,
    label,
    focus,
    error,
    disabled,
    readonly,
    inputAlign,
    showAction,
    useActionSlot,
    useLeftIconSlot,
    useRightIconSlot,
    leftIcon = 'search',
    rightIcon,
    placeholder,
    placeholderStyle,
    actionText = '取消',
    background = '#ffffff',
    maxlength = -1,
    shape = 'square',
    clearable = true,
    clearTrigger = 'focus',
    clearIcon = 'clear',
    renderLabel,
    renderLefticon,
    renderRighticon,
    renderAction,
    onFocus,
    onBlur,
    onChange,
    onClear,
    onClickInput,
    onSearch,
    onCancel,
    style,
    className,
    ...others
  } = props

  const _change = function (e: ITouchEvent) {
    setInnerValue(e.detail)
    useState
    onChange?.(e)
  }

  const _cancel = function (e: ITouchEvent) {
    /**
     * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
     * https://github.com/youzan/@vant/weapp/issues/1768
     */
    setTimeout(() => {
      e.detail = ''
      setInnerValue('')

      onCancel?.()
      onChange?.(e)
    }, 200)
  }

  useEffect(
    function () {
      setInnerValue(value)
    },
    [value],
  )

  return (
    <View
      className={`${utils.bem('search', {
        withaction: showAction || useActionSlot,
      })} custom-class ${className}`}
      style={utils.style([{ background: background }, style])}
      {...others}
    >
      <View className={utils.bem('search__content', [shape])}>
        {label ? (
          <View className="van-search__label">{label}</View>
        ) : (
          renderLabel
        )}

        <Field
          type="text"
          leftIcon={!useLeftIconSlot ? leftIcon : ''}
          right-icon={!useRightIconSlot ? rightIcon : ''}
          focus={focus}
          error={error}
          border={false}
          confirmType="search"
          className="van-search__field field-class"
          value={innerValue}
          disabled={disabled}
          readonly={readonly}
          clearable={clearable}
          clearTrigger={clearTrigger}
          clearIcon={clearIcon}
          maxlength={maxlength}
          inputAlign={inputAlign}
          placeholder={placeholder}
          placeholder-style={placeholderStyle}
          renderLefticon={useLeftIconSlot && renderLefticon}
          renderRighticon={useRightIconSlot && renderRighticon}
          customStyle="padding: 5px 10px 5px 0; background-color: transparent;"
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={_change}
          onConfirm={onSearch}
          onClear={onClear}
          onClickInput={onClickInput}
        />
      </View>

      {(showAction || useActionSlot) && (
        <View
          className="van-search__action"
          hoverClass="van-search__action--hover"
          hoverStayTime={70}
        >
          {useActionSlot ? (
            renderAction
          ) : (
            <View onClick={_cancel} className="cancel-class">
              {actionText}
            </View>
          )}
        </View>
      )}
    </View>
  )
}
