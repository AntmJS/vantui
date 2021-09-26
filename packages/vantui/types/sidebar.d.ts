import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SidebarProps extends StandardProps {
  activeKey: number
  children: React.ReactNode
}

declare const Sidebar: ComponentClass<SidebarProps>

export { Sidebar }
