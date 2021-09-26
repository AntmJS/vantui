import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SidebarItemProps extends StandardProps {
  dot?: boolean
  badge?: string
  info?: string
  title?: string
  disabled?: boolean
  onClick?: (a: any) => void
  onChange?: (a: any) => void
  renderTitle?: (a: any) => React.ReactNode
}

declare const SidebarItem: ComponentClass<SidebarItemProps>

export { SidebarItem }
