import { useCallback } from 'react'
import { ITouchEvent, View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { SwitchProps } from '../../types/switch'
import VanLoading from '../loading/index'
import * as computed from './wxs'

export function Switch(props: SwitchProps) {
  const {
    checked = false,
    loading = false,
    disabled = false,
    activeColor = '#1989fa',
    inactiveColor = '#ffffff',
    size = '60',
    activeValue = true,
    inactiveValue = false,
    onChange,
    style,
    className,
    ...others
  } = props

  const onClick = useCallback(
    (event: ITouchEvent) => {
      if (disabled || loading) {
        return
      }

      const value = checked === activeValue ? inactiveValue : activeValue
      Object.defineProperty(event, 'detail', {
        value: value,
      })
      onChange?.(event)
    },
    [activeValue, checked, disabled, inactiveValue, loading, onChange],
  )

  return (
    <View
      className={
        utils.bem('switch', {
          on: checked === activeValue,
          disabled,
        }) + `  ${className}`
      }
      style={utils.style([
        computed.rootStyle({
          size,
          checked,
          activeColor,
          inactiveColor,
          activeValue,
        }),
        style,
      ])}
      {...others}
      onClick={onClick}
    >
      <View className="van-switch__node node-class">
        {loading && (
          <VanLoading
            color={computed.loadingColor({
              checked,
              activeColor,
              inactiveColor,
              activeValue,
            })}
            className="van-switch__loading"
          ></VanLoading>
        )}
      </View>
    </View>
  )
}
export default Switch
