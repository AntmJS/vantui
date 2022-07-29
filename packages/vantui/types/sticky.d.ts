import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface StickyProps extends StandardProps {
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
