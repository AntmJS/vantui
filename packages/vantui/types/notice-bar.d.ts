import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface NoticeBarProps extends ViewProps {
  text?: ReactNode
  mode?: 'closeable' | 'link'
  url?: string
  openType?: any
  delay?: number
  speed?: number
  scrollable?: boolean
  leftIcon?: string
  color?: string
  backgroundColor?: string
  background?: string
  wrapable?: boolean
  children?: ReactNode
  renderLeftIcon?: ReactNode
  renderRightIcon?: ReactNode
  onClick?: (event: ITouchEvent) => any
  onClose?: (event: ITouchEvent) => any
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const NoticeBar: FunctionComponent<NoticeBarProps>

export { NoticeBar }
