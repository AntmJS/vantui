import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

type eventDetail = {
  detail: { index: number; name?: string; title?: string }
}
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
  renderNavLeft?: ReactNode
  renderNavRight?: ReactNode
  onScroll?: (data: {
    detail: { scrollTop?: number | null; isFixed?: boolean }
  }) => void
  onClick?: (event: eventDetail) => void
  onChange?: (event: eventDetail) => void
  onDisabled?: (event: eventDetail) => void
}

declare const Tabs: ComponentClass<TabsProps>

export { Tabs }
