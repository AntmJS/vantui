import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

type eventDetail = {
  detail: { index: number; name?: string; title?: string }
}
export interface TabsProps extends Omit<ViewProps, 'onClick'> {
  sticky?: boolean
  container?: () => any
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

export interface TabProps extends ViewProps {
  dot?: boolean
  info?: string | number
  title?: ReactNode
  disabled?: boolean
  titleStyle?: string
  name?: string | number
  children?: ReactNode
}

declare const Tab: FunctionComponent<TabProps>

declare const Tabs: FunctionComponent<TabsProps>

export { Tabs, Tab }
