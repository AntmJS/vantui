import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { CheckboxGroupProps } from '../../../types/checkbox-group'
import CheckboxGroupContext from './context'

export default function Index(props: CheckboxGroupProps) {
  const {
    max,
    value = [],
    disabled = false,
    direction = 'vertical',
    onChange,
    style,
    className,
    children,
    ...others
  } = props

  return (
    <CheckboxGroupContext.Provider
      value={{ value, max, disabled, direction, onChange }}
    >
      <View
        className={
          utils.bem('checkbox-group', [
            {
              horizontal: direction === 'horizontal',
            },
          ]) + ` ${className || ''}`
        }
        style={style}
        {...others}
      >
        {children}
      </View>
    </CheckboxGroupContext.Provider>
  )
}
