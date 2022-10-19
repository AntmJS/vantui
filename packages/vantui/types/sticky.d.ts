import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface StickyProps extends ViewProps {
  zIndex?: number
  offsetTop?: number
  disabled?: boolean
  container?: () => any
  scrollTop?: number
  children?: ReactNode
  onScroll?: (data: {
    detail: { scrollTop?: number; isFixed?: boolean }
  }) => any
}

declare const Sticky: FunctionComponent<StickyProps>

export { Sticky }
