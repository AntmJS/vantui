import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface TabsProps extends StandardProps {
  sticky?: boolean
  border?: boolean
  swipeable?: boolean
  titleActiveColor?: string
  titleInactiveColor?: string
  color?: string
  animated?: boolean
  lineWidth?: number
  lineHeight?: number
  active?: number | null
  type?: string
  ellipsis?: boolean
  duration?: number
  zIndex?: number
  swipeThreshold?: number
  offsetTop?: number
  lazyRender?: boolean
  children?: JSX.Element | JSX.Element[] | string
}

declare const Tabs: ComponentClass<TabsProps>

export { Tabs }
