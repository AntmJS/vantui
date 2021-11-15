import { ITouchEvent, View } from '@tarojs/components'
import { useState, useEffect, useCallback, useContext } from 'react'
import * as utils from '../wxs/utils'
import { RadioProps } from '../../types/radio'
import VanIcon from '../icon/index'
// import { canIUseModel } from '../common/version'
import RadioGroupContext from '../radio-group/context'
import { isEmptyObject } from '../utils/type'
import * as computed from './wxs'

export function Radio(props: RadioProps) {
  const [state, setState] = useState({
    value: '',
    direction: '',
    parentDisabled: false,
  })

  const {
    name,
    disabled = false,
    checkedColor,
    labelPosition = 'right',
    labelDisabled = false,
    shape = 'round',
    iconSize = '20px',
    renderIcon,
    style,
    className,
    children,
    ...others
  } = props

  const parentData = useContext(RadioGroupContext)

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
      return {
        ...state,
        value: props.value,
      }
    })
  }, [props.value])

  useEffect(() => {
    if (!isEmptyObject(parentData)) {
      const { value, direction, disabled }: any = parentData

      setState((state) => {
        return {
          ...state,
          value,
          direction,
          parentDisabled: disabled,
        }
      })
    }
  }, [props.value, parentData])

  const emitChange = useCallback(
    (event: ITouchEvent) => {
      onChange?.(event)
      setState((state) => {
        return {
          ...state,
          value: event.detail,
        }
      })
    },
    [onChange],
  )
  const onClick = useCallback(
    (event: ITouchEvent) => {
      if (!disabled && !state.parentDisabled) {
        Object.defineProperty(event, 'detail', {
          value: name,
          writable: true,
        })
        emitChange(event)
      }
    },
    [disabled, emitChange, name, state.parentDisabled],
  )
  const onClickLabel = useCallback(
    (event: ITouchEvent) => {
      if (!(disabled || state.parentDisabled) && !labelDisabled) {
        Object.defineProperty(event, 'detail', {
          value: name,
          writable: true,
        })
        emitChange(event)
      }
    },
    [disabled, emitChange, labelDisabled, name, state.parentDisabled],
  )

  return (
    <View
      className={utils.bem('radio', [state.direction]) + `  ${className}`}
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
        {renderIcon || (
          <VanIcon
            name="success"
            className={
              utils.bem('radio__icon', [
                shape,
                {
                  disabled: disabled || state.parentDisabled,
                  checked: state.value === name,
                },
              ]) + ' icon-class'
            }
            style={computed.iconStyle({
              iconSize,
              checkedColor,
              disabled,
              parentDisabled: state.parentDisabled,
              value: state.value,
              name,
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
export default Radio
