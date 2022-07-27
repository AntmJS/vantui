import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexBarProps extends StandardProps {
  sticky?: boolean
  zIndex?: number
  highlightColor?: string
  stickyOffsetTop?: number
  indexList?: string[] | number[]
  onSelect?: (event: { detail: string | number }) => void
  children?: ReactNode
}
declare const IndexBar: FunctionComponent<IndexBarProps>
export { IndexBar }
