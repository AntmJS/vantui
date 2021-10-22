import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabbarProps extends StandardProps {
  active?: number
  activeColor?: string
  inactiveColor?: string
  fixed?: boolean
  placeholder?: boolean
  border?: boolean
  zIndex?: number
  safeAreaInsetBottom?: boolean
  children?: ReactNode
  onChange?: (event: { detail: string | number }) => void
}

declare const Tabbar: ComponentClass<TabbarProps>

export { Tabbar }
