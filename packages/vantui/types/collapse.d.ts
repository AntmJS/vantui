import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface CollapseProps extends StandardProps {
  value?: Array<string | number>
  accordion?: boolean
  border?: boolean
  children?: JSX.Element | JSX.Element[] | string | any
  onOpen?: (data: any) => any
  onClose?: (data: any) => any
  onChange?: (data: any) => any
  onInput?: (data: any) => any
}

declare const Collapse: ComponentClass<CollapseProps>

export { Collapse }
