import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

interface onChangeEvent {
  event: {
    detail?: number
  }
}
export interface SidebarProps extends StandardProps {
  onChange?: (a: onChangeEvent) => any
  activeKey: number
  children: React.ReactNode
}

declare const Sidebar: ComponentClass<SidebarProps>

export { Sidebar }
