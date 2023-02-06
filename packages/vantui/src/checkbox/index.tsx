import { useState, useEffect, useCallback, useContext } from 'react'
import { ITouchEvent, View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import VanIcon from '../icon/index'
import { CheckboxProps } from '../../types/checkbox'
import CheckboxGroupContext from '../checkbox-group/context'
import { isEmptyObject } from '../utils/type'
import * as computed from './wxs'

export function Checkbox(
  props: CheckboxProps & {
    parent: any
  },
) {
  const [state, setState] = useState({
    value: undefined,
    parentDisabled: false,
    direction: 'vertical',
  })

  const {
    name,
    disabled,
    checkedColor = '',
    labelPosition = 'right',
    labelDisabled,
    shape = 'round',
    iconSize = '20px',
    renderIcon,
    style,
    className,
    children,
    ...others
  } = props

  const parentData = useContext(CheckboxGroupContext)

  const onChange = useCallback(
    (event) => {
      if (parentData.onChange) {
        parentData.onChange(event)
        return
      }

      props?.onChange?.(event)
    },
    // eslint-disable-next-line
    [parentData.onChange, props.onChange],
  )

  useEffect(() => {
    setState((state) => {
      const value: any = props.value
      return {
        ...state,
        value,
      }
    })
  }, [props.value])

  useEffect(() => {
    if (!isEmptyObject(parentData)) {
      const {
        value: parentValue,
        direction,
        disabled: parentDisabled,
      }: any = parentData

      const value: any = parentValue?.indexOf(`${props.name}`) > -1

      setState((state) => {
        return {
          ...state,
          value,
          direction,
          parentDisabled,
        }
      })
    }
  }, [props, parentData])

  const setParentValue = useCallback(
    (parent: any, event: ITouchEvent) => {
      const value = event.detail
      const { max, value: parentValue_ } = parent
      const parentValue = parentValue_ ? [].concat(parentValue_) : parentValue_
      if (value) {
        if (max && parentValue.length >= max) {
          return
        }
        if (parentValue.indexOf(name) === -1) {
          parentValue.push(name)
          event.detail = parentValue
          onChange?.(event)
        }
      } else {
        const index = parentValue.indexOf(name)
        if (index !== -1) {
          parentValue.splice(index, 1)
          event.detail = parentValue
          onChange?.(event)
        }
      }
    },
    [name, onChange],
  )
  const emitChange = useCallback(
    (event: ITouchEvent) => {
      if (!isEmptyObject(parentData)) {
        setParentValue(parentData, event)
      } else {
        onChange?.(event)
      }
    },
    [parentData, onChange, setParentValue],
  )
  const toggle = useCallback(
    (event: ITouchEvent) => {
      if (!disabled && !state.parentDisabled) {
        Object.defineProperty(event, 'detail', {
          value: !state.value,
          writable: true,
        })
        emitChange(event)
      }
    },
    [disabled, emitChange, state.parentDisabled, state.value],
  )
  const onClickLabel = useCallback(
    (event: ITouchEvent) => {
      if (!disabled && !labelDisabled && !state.parentDisabled) {
        Object.defineProperty(event, 'detail', {
          value: !state.value,
          writable: true,
        })
        emitChange(event)
      }
    },
    [disabled, emitChange, labelDisabled, state.parentDisabled, state.value],
  )

  return (
    <View
      className={
        utils.bem('checkbox', [
          {
            horizontal: state.direction === 'horizontal',
          },
        ]) + `  ${className}`
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
        {renderIcon || (
          <VanIcon
            name="success"
            className={
              utils.bem('checkbox__icon', [
                shape,
                {
                  disabled: disabled || state.parentDisabled,
                  checked: state.value,
                },
              ]) + ' icon-class'
            }
            style={
              computed.iconStyle({
                checkedColor,
                value: state.value,
                disabled,
                parentDisabled: state.parentDisabled,
                iconSize,
              }) + ';line-height:1.25em;'
            }
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

export default Checkbox
