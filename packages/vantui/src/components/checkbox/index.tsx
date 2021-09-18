import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import { CheckboxProps } from '../../../types/checkbox'
import * as computed from './wxs'

export default function Index(
  props: CheckboxProps & {
    parent: any
  },
) {
  const [state, setState] = useState({
    parentDisabled: false,
    direction: 'vertical',
  })

  const {
    parent,
    name,
    value,
    disabled,
    useIconSlot,
    checkedColor,
    labelPosition = 'right',
    labelDisabled,
    shape = 'round',
    iconSize = 40,
    renderIcon,
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  useEffect(() => {
    if (!parent) {
      return
    }
    const { disabled, direction } = parent.data
    setState((state) => {
      return {
        ...state,
        direction,
        parentDisabled: disabled,
      }
    })
  }, [parent])

  const emitChange = function (value: any) {
    if (parent) {
      setParentValue(parent, value)
    } else {
      onChange?.(value)
    }
  }
  const setParentValue = function (parent: any, value: any) {
    const parentValue = parent.value.slice()
    const { max } = parent.data
    if (value) {
      if (max && parentValue.length >= max) {
        return
      }
      if (parentValue.indexOf(name) === -1) {
        parentValue.push(name)
        onChange?.(parentValue)
      }
    } else {
      const index = parentValue.indexOf(name)
      if (index !== -1) {
        parentValue.splice(index, 1)
        onChange?.(parentValue)
      }
    }
  }
  const toggle = function () {
    if (!disabled && !state.parentDisabled) {
      emitChange(!value)
    }
  }
  const onClickLabel = function () {
    if (!disabled && !labelDisabled && !state.parentDisabled) {
      emitChange(!value)
    }
  }

  return (
    <View
      className={
        utils.bem('checkbox', [
          {
            horizontal: state.direction === 'horizontal',
          },
        ]) + ` custom-class ${className}`
      }
      style={style}
      {...others}
    >
      {labelPosition === 'left' && (
        <View
          className={
            'label-class ' +
            utils.bem('checkbox__label', [
              labelPosition,
              {
                disabled: disabled || state.parentDisabled,
              },
            ])
          }
          onClick={onClickLabel}
        >
          {children}
        </View>
      )}
      <View className="van-checkbox__icon-wrap" onClick={toggle}>
        {useIconSlot ? (
          renderIcon
        ) : (
          <VanIcon
            info={null}
            name="success"
            size="0.8em"
            className={
              utils.bem('checkbox__icon', [
                shape,
                {
                  disabled: disabled || state.parentDisabled,
                  checked: value,
                },
              ]) + ' icon-class'
            }
            style={computed.iconStyle({
              checkedColor,
              value,
              disabled,
              parentDisabled: state.parentDisabled,
              iconSize,
            })}
            customStyle="line-height: 1.25em;"
          ></VanIcon>
        )}
      </View>
      {labelPosition === 'right' && (
        <View
          className={
            'label-class ' +
            utils.bem('checkbox__label', [
              labelPosition,
              {
                disabled: disabled || state.parentDisabled,
              },
            ])
          }
          onClick={onClickLabel}
        >
          {children}
        </View>
      )}
    </View>
  )
}
