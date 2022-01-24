import { ComponentClass, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface CollapseProps extends StandardProps {
  value?: Array<string | number> | string
  accordion?: boolean
  border?: boolean
  children?: Array<ReactNode>
  onChange?: (event: ITouchEvent) => any
  onOpen?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

export interface CollapseItemProps extends StandardProps {
  name?: string | number
  title?: string | number
  value?: string | number
  icon?: string
  label?: string
  disabled?: boolean
  clickable?: boolean
  border?: boolean
  isLink?: boolean
  children?: ReactNode
  renderTitle?: ReactNode
  renderIcon?: ReactNode
  renderRightIcon?: ReactNode
  renderValue?: ReactNode
}

declare const CollapseItem: ComponentClass<CollapseItemProps>

declare const Collapse: ComponentClass<CollapseProps>

export { Collapse, CollapseItem }
