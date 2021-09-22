import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexBarProps extends StandardProps {
  sticky?: boolean
  zIndex?: number
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: any[]
  onSelect?: (...args: any[]) => any
  children?: JSX.Element | JSX.Element[] | string
}
declare const IndexBar: ComponentClass<IndexBarProps>
export { IndexBar }
