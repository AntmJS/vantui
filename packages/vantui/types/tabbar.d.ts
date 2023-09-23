import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface TabbarProps extends ViewProps {
  active?: string | number
  activeColor?: string
  inactiveColor?: string
  fixed?: boolean
  placeholder?: boolean
  border?: boolean
  zIndex?: number
  safeAreaInsetBottom?: boolean
  children?: ReactNode
  onChange?: (event: { detail: string | number }) => void
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

export interface TabbarItemProps extends Omit<ViewProps, 'onClick'> {
  info?: ReactNode
  name?: string | number
  icon?: string
  dot?: boolean
  iconPrefix?: string
  renderIconActive?: ReactNode
  renderIcon?: ReactNode
  children?: ReactNode
  onClick?: (name: string | number) => void
}

declare const TabbarItem: FunctionComponent<TabbarItemProps>

declare const Tabbar: FunctionComponent<TabbarProps>

export { Tabbar, TabbarItem }
