import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
export interface IndexAnchorProps extends ViewProps {
  index: string | number
  children?: ReactNode
}
declare const IndexAnchor: FunctionComponent<IndexAnchorProps>
export { IndexAnchor }
