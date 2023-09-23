import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface StickyProps extends ViewProps {
  zIndex?: number
  offsetTop?: number
  disabled?: boolean
  container?: () => any
  scrollTop?: number
  children?: ReactNode
  onScroll?: (data: {
    detail: { scrollTop?: number; isFixed?: boolean }
  }) => any
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const Sticky: FunctionComponent<StickyProps>

export { Sticky }
