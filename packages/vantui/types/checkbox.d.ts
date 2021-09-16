import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CheckboxProps extends StandardProps {
  value?: boolean
  disabled?: boolean
  useIconSlot?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: string
  iconSize?: number
}

declare const Checkbox: ComponentClass<CheckboxProps>

export { Checkbox }
