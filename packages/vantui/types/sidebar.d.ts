import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SidebarProps extends StandardProps {
  onChange?: (...args: any[]) => any
  activeKey: number
  children: React.ReactNode
}

declare const Sidebar: ComponentClass<SidebarProps>

export { Sidebar }
