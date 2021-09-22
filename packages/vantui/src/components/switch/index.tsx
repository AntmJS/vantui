import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { SwitchProps } from '../../../types/switch'
import VanLoading from '../loading/index'
import * as computed from './wxs'

export default function Index(props: SwitchProps) {
  const {
    checked = null,
    loading,
    disabled,
    activeColor,
    inactiveColor,
    size = '60',
    activeValue = true,
    inactiveValue = false,
    onChange,
    style,
    className,
    ...others
  } = props

  const onClick = function () {
    if (disabled || loading) {
      return
    }

    const value = checked === activeValue ? inactiveValue : activeValue
    onChange?.(value)
  }

  return (
    <View
      className={
        utils.bem('switch', {
          on: checked === activeValue,
          disabled,
        }) + ` custom-class ${className}`
      }
      style={utils.style([
        computed.rootStyle({
          size,
          checked,
          activeColor,
          inactiveColor,
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
            })}
            className="van-switch__loading"
          ></VanLoading>
        )}
      </View>
    </View>
  )
}
