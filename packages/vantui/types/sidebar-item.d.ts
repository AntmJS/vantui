import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
interface onChangeEvent {
  event: {
    detail?: number
  }
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

declare const SidebarItem: ComponentClass<SidebarItemProps>

export { SidebarItem }
