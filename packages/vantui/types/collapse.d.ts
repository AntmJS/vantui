import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface CollapseProps extends ViewProps {
  value?: Array<string | number> | string
  accordion?: boolean
  border?: boolean
  children?: Array<ReactNode> | ReactNode
  onChange?: (event: ITouchEvent) => any
  onOpen?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
}

export interface CollapseItemProps extends ViewProps {
  name?: string | number
  title?: string | number
  value?: string | number
  /**
   * @description 对应Icon的name
   */
  icon?: string
  label?: ReactNode
  /**
   * @default false
   */
  disabled?: boolean
  /**
   * @default false
   */
  clickable?: boolean
  /**
   * @default true
   */
  border?: boolean
  /**
   * @default true
   */
  isLink?: boolean
  children?: ReactNode
  renderTitle?: ReactNode
  renderIcon?: ReactNode
  /**
   * @description isLink 设置为 false
   */
  renderRightIcon?: ReactNode
  renderValue?: ReactNode
  size?: 'large'
}

declare const CollapseItem: FunctionComponent<CollapseItemProps>

declare const Collapse: FunctionComponent<CollapseProps>

export { Collapse, CollapseItem }
