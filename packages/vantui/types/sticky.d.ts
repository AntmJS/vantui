import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface StickyProps extends StandardProps {
  zIndex?: number
  offsetTop?: number
  disabled?: boolean
  container?: () => any
  scrollTop?: number | null
  children?: ReactNode
  onScroll?: (data: { scrollTop?: number | null; isFixed?: boolean }) => any
}

declare const Sticky: ComponentClass<StickyProps>

export { Sticky }
