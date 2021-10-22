import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabbarItemProps extends Omit<StandardProps, 'onClick'> {
  info?: string
  name?: string | number
  icon?: string
  dot?: boolean
  iconPrefix?: string
  renderIconActive?: ReactNode
  renderIcon?: ReactNode
  children?: ReactNode
  onClick?: (name: string | number) => void
}

declare const TabbarItem: ComponentClass<TabbarItemProps>

export { TabbarItem }
