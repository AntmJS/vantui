import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CollapseItemProps extends StandardProps {
  name?: string | number
  title?: string | number
  value?: string | number
  icon?: string
  label?: string
  disabled?: boolean
  clickable?: boolean
  border?: boolean
  isLink?: boolean
  children?: ReactNode
  renderTitle?: ReactNode
  renderIcon?: ReactNode
  renderRightIcon?: ReactNode
  renderValue?: ReactNode
}

declare const CollapseItem: ComponentClass<CollapseItemProps>

export { CollapseItem }
