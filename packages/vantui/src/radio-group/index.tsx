import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { RadioGroupProps } from '../../types/radio'
import RadioGroupContext from './context'

export function RadioGroup(props: RadioGroupProps) {
  const {
    value = null,
    direction = 'vertical',
    disabled = false,
    onChange,
    children,
    style,
    className,
    ...others
  } = props

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
