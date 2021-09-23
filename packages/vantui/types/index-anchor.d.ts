import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexAnchorProps extends StandardProps {
  index: string | number
  children?: ReactNode
}
declare const IndexAnchor: ComponentClass<IndexAnchorProps>
export { IndexAnchor }
