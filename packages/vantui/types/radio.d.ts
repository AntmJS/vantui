import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface RadioProps extends StandardProps {
  parent?: any
  name?: string
  value?: null
  disabled?: boolean
  useIconSlot?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: string
  iconSize?: number
  children?: JSX.Element | JSX.Element[] | string
  renderIcon?: () => any
  onClickLabel?: () => any
  onInput?: (data: any) => any
  onChange?: (data: any) => any
}

declare const Radio: ComponentClass<RadioProps>

export { Radio }
