import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexBarProps extends StandardProps {
  sticky?: boolean
  zIndex?: number
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: any[]
  onSelect?: (...args: any[]) => any
  children?: ReactNode
}
declare const IndexBar: ComponentClass<IndexBarProps>
export { IndexBar }
