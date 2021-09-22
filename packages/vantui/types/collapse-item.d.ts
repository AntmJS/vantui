import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CollapseItemProps extends StandardProps {
  name?: string
  title?: string
  value?: string
  icon?: string
  label?: string
  disabled?: boolean
  clickable?: boolean
  border?: boolean
  isLink?: boolean
  children?: ReactNode
  renderValue?: () => any
}

declare const CollapseItem: ComponentClass<CollapseItemProps>

export { CollapseItem }
