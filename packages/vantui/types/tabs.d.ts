import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabsProps extends Omit<StandardProps, 'onClick'> {
  sticky?: boolean
  border?: boolean
  swipeable?: boolean
  titleActiveColor?: string
  titleInactiveColor?: string
  color?: string
  animated?: boolean
  lineWidth?: number | string
  lineHeight?: number | string
  active?: number | string
  type?: string
  ellipsis?: boolean
  duration?: number
  zIndex?: number
  swipeThreshold?: number
  offsetTop?: number
  lazyRender?: boolean
  children: ReactNode
  renderNavleft?: ReactNode
  renderNavright?: ReactNode
  onScroll?: (data: { scrollTop?: number | null; isFixed?: boolean }) => any
  onClick?: (data: { index: number; name?: string; title?: string }) => any
  onChange?: (data: { index: number; name?: string; title?: string }) => any
  onDisabled?: (data: { index: number; name?: string; title?: string }) => any
}

declare const Tabs: ComponentClass<TabsProps>

export { Tabs }
