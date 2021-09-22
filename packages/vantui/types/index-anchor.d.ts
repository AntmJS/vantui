import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
export interface IndexAnchorProps extends StandardProps {
  index: string | number
  children?: JSX.Element | JSX.Element[] | string
}
declare const IndexAnchor: ComponentClass<IndexAnchorProps>
export { IndexAnchor }
