import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

interface onChangeEvent {
  detail?: number
}
interface onChangeEvent {
  detail?: number
}
export interface SidebarItemProps extends StandardProps {
  dot?: boolean
  badge?: string
  info?: string
  title?: string
  disabled?: boolean
  onClick?: (a: any) => void
  onChange?: (a: onChangeEvent) => void
  renderTitle?: (a: any) => React.ReactNode
}

export interface SidebarProps extends StandardProps {
  onChange?: (a: onChangeEvent) => any
  activeKey: number
  children: React.ReactNode
}

declare const Sidebar: ComponentClass<SidebarProps>

declare const SidebarItem: ComponentClass<SidebarItemProps>

export { Sidebar, SidebarItem }
