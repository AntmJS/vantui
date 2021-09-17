import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabbarItemProps extends Omit<StandardProps, 'onClick'> {
  info: null | string
  name: null | string | number
  icon?: string
  dot?: boolean
  iconPrefix?: string
  renderIconactive?: ReactNode
  renderIcon?: ReactNode
  children?: ReactNode
  onClick?: (data: string | number) => void
}

declare const TabbarItem: ComponentClass<TabbarItemProps>

export { TabbarItem }
