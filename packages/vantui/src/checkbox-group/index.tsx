import { View } from '@tarojs/components'

import * as utils from '../wxs/utils'
import { CheckboxGroupProps } from '../../types/checkbox'
import { get } from '../default-props'
import CheckboxGroupContext from './context'

const d = get().CheckboxGroup

export function CheckboxGroup(props: CheckboxGroupProps) {
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
  } = {
    ...d,
    ...props,
  }

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
export default CheckboxGroup
