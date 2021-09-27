import { View } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import * as utils from '../wxs/utils'
import { RadioProps } from '../../../types/radio'
import VanIcon from '../icon/index'
import { canIUseModel } from '../common/version.js'
import * as computed from './wxs'

export default function Index(
  props: RadioProps & {
    parent?: any
  },
) {
  const [state, setState] = useState({
    direction: '',
    parentDisabled: false,
  })

  const {
    parent,
    name,
    value,
    disabled = false,
    useIconSlot,
    checkedColor,
    labelPosition = 'right',
    labelDisabled = false,
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

  const emitChange = useCallback(
    (value: any) => {
      onChange?.(value)
      if (canIUseModel()) {
        setState((state) => {
          return {
            ...state,
            value,
          }
        })
      }
    },
    [onChange],
  )
  const onClick = useCallback(() => {
    if (!disabled && !state.parentDisabled) {
      emitChange(name)
    }
  }, [disabled, emitChange, name, state.parentDisabled])
  const onClickLabel = useCallback(() => {
    if (!(disabled || state.parentDisabled) && !labelDisabled) {
      emitChange(name)
    }
  }, [disabled, emitChange, labelDisabled, name, state.parentDisabled])

  return (
    <View
      className={
        utils.bem('radio', [state.direction]) + ` custom-class ${className}`
      }
      style={style}
      {...others}
    >
      {labelPosition === 'left' && (
        <View
          className={
            utils.bem('radio__label', [
              labelPosition,
              {
                disabled: disabled || state.parentDisabled,
              },
            ]) + ' label-class'
          }
          onClick={onClickLabel}
        >
          {children}
        </View>
      )}
      <View
        className="van-radio__icon-wrap"
        style={'font-size: ' + utils.addUnit(iconSize)}
        onClick={onClick}
      >
        {useIconSlot ? (
          renderIcon
        ) : (
          <VanIcon
            name="success"
            className={
              utils.bem('radio__icon', [
                shape,
                {
                  disabled: disabled || state.parentDisabled,
                  checked: value === name,
                },
              ]) + ' icon-class'
            }
            style={computed.iconStyle({
              iconSize,
              checkedColor,
              disabled,
              parentDisabled: state.parentDisabled,
              value,
              name,
            })}
            customStyle={computed.iconCustomStyle({
              iconSize,
            })}
          ></VanIcon>
        )}
      </View>
      {labelPosition === 'right' && (
        <View
          className={
            'label-class ' +
            utils.bem('radio__label', [
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
