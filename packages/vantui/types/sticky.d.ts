import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface StickyProps extends StandardProps {
  zIndex?: number
  offsetTop?: number
  disabled?: boolean
  container?: () => any
  scrollTop?: number | null
  children?: JSX.Element | JSX.Element[] | string
  onScroll?: (data: { scrollTop?: number | null; isFixed?: boolean }) => any
}

declare const Sticky: ComponentClass<StickyProps>

export { Sticky }
