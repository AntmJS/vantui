import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CollapseItemProps extends StandardProps {
  parent?: any
  name?: string
  title?: string
  value?: string
  icon?: string
  label?: string
  disabled?: boolean
  clickable?: boolean
  border?: boolean
  isLink?: boolean
  children?: JSX.Element | JSX.Element[] | string
  renderValue?: () => any
}

declare const CollapseItem: ComponentClass<CollapseItemProps>

export { CollapseItem }
