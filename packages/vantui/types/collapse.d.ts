import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface CollapseProps extends StandardProps {
  value?: Array<string | number>
  accordion?: boolean
  border?: boolean
  children?: Array<ReactNode>
  onChange?: (event: ITouchEvent) => any
  onOpen?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

declare const Collapse: ComponentClass<CollapseProps>

export { Collapse }
