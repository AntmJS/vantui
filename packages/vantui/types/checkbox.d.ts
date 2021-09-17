import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CheckboxProps extends StandardProps {
  name?: string
  value?: boolean
  disabled?: boolean
  useIconSlot?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: string
  iconSize?: number
  children?: JSX.Element | JSX.Element[] | string | any
  renderIcon?: () => any
  onClickLabel?: () => any
  onChange?: (data: any) => any
}

declare const Checkbox: ComponentClass<CheckboxProps>

export { Checkbox }
