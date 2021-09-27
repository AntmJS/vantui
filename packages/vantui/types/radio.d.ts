import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface RadioProps extends StandardProps {
  name?: string
  value?: null
  disabled?: boolean
  useIconSlot?: boolean
  checkedColor?: string
  labelPosition?: string
  labelDisabled?: boolean
  shape?: 'round' | 'square'
  iconSize?: number
  children?: ReactNode
  renderIcon?: ReactNode
  onChange?: (data: any) => any
}

declare const Radio: ComponentClass<RadioProps>

export { Radio }
