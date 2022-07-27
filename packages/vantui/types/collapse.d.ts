import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, StandardProps } from '@tarojs/components'

export interface CollapseProps extends StandardProps {
  value?: Array<string | number> | string
  accordion?: boolean
  border?: boolean
  children?: Array<ReactNode> | ReactNode
  onChange?: (event: ITouchEvent) => any
  onOpen?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

export interface CollapseItemProps extends StandardProps {
  name?: string | number
  title?: string | number
  value?: string | number
  /**
   * @description 对应Icon的name
   */
  icon?: string
  label?: ReactNode
  disabled?: boolean
  clickable?: boolean
  border?: boolean
  isLink?: boolean
  children?: ReactNode
  renderTitle?: ReactNode
  renderIcon?: ReactNode
  renderRightIcon?: ReactNode
  renderValue?: ReactNode
  size?: 'large'
}

declare const CollapseItem: FunctionComponent<CollapseItemProps>

declare const Collapse: FunctionComponent<CollapseProps>

export { Collapse, CollapseItem }
