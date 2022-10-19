import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

interface OnChangeEvent {
  detail?: number
}

export interface SidebarItemProps extends ViewProps {
  dot?: boolean
  badge?: ReactNode | null
  info?: ReactNode
  title?: ReactNode
  disabled?: boolean
  onClick?: (a: any) => void
  onChange?: (a: OnChangeEvent) => void
  renderTitle?: (a: any) => ReactNode
}

export interface SidebarProps extends ViewProps {
  onChange?: (a: OnChangeEvent) => any
  activeKey: number
  children: ReactNode
}

declare const Sidebar: FunctionComponent<SidebarProps>

declare const SidebarItem: FunctionComponent<SidebarItemProps>

export { Sidebar, SidebarItem }
