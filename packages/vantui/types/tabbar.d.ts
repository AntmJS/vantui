import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface TabbarProps extends ViewProps {
  /**
   * @description 绑定当前选中标签的标识符
   */
  active?: string | number
  /**
   * @description 激活状态的颜色
   */
  activeColor?: string
  /**
   * @description 默认状态的颜色
   */
  inactiveColor?: string
  /**
   * @description 是否固定在底部
   * @default true
   */
  fixed?: boolean
  /**
   * @description 固定在底部时，是否在标签位置生成一个等高的占位元素
   * @default false
   */
  placeholder?: boolean
  /**
   * @description 是否显示外边框
   * @default true
   */
  border?: boolean
  /**
   * @description 元素 z-index
   */
  zIndex?: number
  /**
   * @description 是否开启底部安全区适配
   */
  safeAreaInsetBottom?: boolean
  children?: ReactNode
  /**
   * @description 切换标签时触发
   */
  onChange?: (event: { detail: string | number }) => void
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

export interface TabbarItemProps extends Omit<ViewProps, 'onClick'> {
  info?: ReactNode
  /**
   * @description 标签名称，作为匹配的标识符
   * @default 当前标签的索引值
   */
  name?: string | number
  /**
   * @description 图标名称或图片链接，等同于 Icon 组件的 name 属性
   */
  icon?: string
  /**
   * @description 是否显示图标右上角小红点
   * @default false
   */
  dot?: boolean
  /**
   * @description 图标类名前缀
   * @default van-icon
   */
  iconPrefix?: string
  /**
   * @description 自定义选中的图标
   */
  renderIconActive?: ReactNode
  /**
   * @description 自定义默认的图标
   */
  renderIcon?: ReactNode
  children?: ReactNode
  /**
   * @description 切换标签时触发
   */
  onClick?: (name: string | number) => void
}

declare const TabbarItem: FunctionComponent<TabbarItemProps>

declare const Tabbar: FunctionComponent<TabbarProps>

export { Tabbar, TabbarItem }
