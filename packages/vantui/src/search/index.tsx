import { useState, useEffect, useMemo } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { Field } from '../field'
import { SearchProps } from '../../types/search'

export function Search(props: SearchProps) {
  const {
    value,
    defaultValue = '',
    label,
    focus,
    error,
    disabled,
    readonly,
    inputAlign,
    showAction,
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
    renderLeftIcon,
    renderRightIcon,
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

  const noControlled = useMemo(() => typeof value === 'undefined', [value])
  const [innerValue, setInnerValue] = useState(
    noControlled ? defaultValue : value,
  )
  const _change = function (event: ITouchEvent) {
    if (noControlled) {
      setInnerValue(event.detail)
    }
    onChange?.(event)
  }

  const _cancel = function (e: ITouchEvent) {
    /**
     * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
     * https://github.com/youzan/@vant/weapp/issues/1768
     */
    setTimeout(() => {
      setInnerValue('')

      onCancel?.()
      Object.defineProperty(e, 'detail', {
        value: '',
      })

      onChange?.(e)
    }, 200)
  }

  useEffect(
    function () {
      if (!noControlled) {
        setInnerValue(value)
      }
    },
    [noControlled, value],
  )

  const searchValue = noControlled ? innerValue : (value as number)

  return (
    <View
      className={`${utils.bem('search', {
        withaction: showAction || !!renderAction,
      })}  ${className}`}
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
          leftIcon={!renderLeftIcon ? leftIcon : ''}
          rightIcon={!renderRightIcon ? rightIcon : ''}
          focus={focus}
          error={error}
          border={false}
          confirmType="search"
          className="van-search__field field-class"
          value={searchValue}
          disabled={disabled}
          readonly={readonly}
          clearable={clearable}
          clearTrigger={clearTrigger}
          clearIcon={clearIcon}
          maxlength={maxlength}
          inputAlign={inputAlign}
          placeholder={placeholder}
          placeholderStyle={placeholderStyle}
          renderLeftIcon={renderLeftIcon}
          renderRightIcon={renderRightIcon}
          style="padding: 5px 10px 5px 0; background-color: transparent;"
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={_change}
          onConfirm={onSearch}
          // @ts-ignore
          onClear={onClear}
          // @ts-ignore
          onClickInput={onClickInput}
        />
      </View>

      {(showAction || renderAction) && (
        <View
          className="van-search__action"
          hoverClass="van-search__action--hover"
          hoverStayTime={70}
        >
          {renderAction || (
            <View onClick={_cancel} className="cancel-class">
              {actionText}
            </View>
          )}
        </View>
      )}
    </View>
  )
}

export default Search
