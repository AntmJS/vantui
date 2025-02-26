import { View } from '@tarojs/components'
import { useState } from 'react'
import * as utils from '../wxs/utils'
import { RadioGroupProps } from '../../types/radio'
import { get } from '../default-props'
import RadioGroupContext from './context'

export function RadioGroup(props: RadioGroupProps) {
  const [d] = useState(get().RadioGroup)
  const {
    value = null,
    direction = 'vertical',
    disabled = false,
    onChange,
    children,
    style,
    className,
    ...others
  } = {
    ...d,
    ...props,
  }

  return (
    <RadioGroupContext.Provider
      value={{
        value,
        direction,
        disabled,
        onChange,
      }}
    >
      <View
        className={
          utils.bem('radio-group', [direction]) + ` ${className || ''}`
        }
        style={style}
        {...others}
      >
        {children}
      </View>
    </RadioGroupContext.Provider>
  )
}
export default RadioGroup
