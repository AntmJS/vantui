import { FunctionComponent, ReactNode } from 'react'
import { ITouchEvent, ViewProps } from '@tarojs/components'

export interface CollapseProps extends ViewProps {
  /**
   * @description 当前展开面板的 name
   */
  value?: Array<string | number> | string
  /**
   * @description 是否开启手风琴模式
   * @default false
   */
  accordion?: boolean
  /**
   * @description 是否显示外边框
   * @default true
   */
  border?: boolean
  /**
   * @description
   */
  children?: Array<ReactNode> | ReactNode
  /**
   * @description 切换面板时触发
   */
  onChange?: (event: ITouchEvent) => any
  /**
   * @description 打开面板时触发
   */
  onOpen?: (event: ITouchEvent) => any
  /**
   * @description 关闭面板时触发
   */
  onClose?: (event: ITouchEvent) => any
}

export interface CollapseItemProps extends ViewProps {
  /**
   * @description 唯一标识符，默认为索引值
   * @default index
   */
  name?: string | number
  /**
   * @description 标题栏左侧内容
   */
  title?: string | number
  /**
   * @description 标题栏右侧内容
   */
  value?: string | number
  /**
   * @description 对应Icon的name 可选值见 Icon 组件
   */
  icon?: string
  /**
   * @description 标题栏描述信息
   */
  label?: ReactNode
  /**
   * @description 	是否禁用面板
   * @default false
   */
  disabled?: boolean
  /**
   * @default false
   */
  clickable?: boolean
  /**
   * @description 	是否显示内边框
   * @default true
   */
  border?: boolean
  /**
   * @description 是否展示标题栏右侧箭头并开启点击反馈
   * @default true
   */
  isLink?: boolean
  /**
   * @description 面板item内容
   */
  children?: ReactNode
  /**
   * @description 自定义标题，优先级低于title
   */
  renderTitle?: ReactNode
  /**
   * @description 自定义icon，优先级低于icon
   */
  renderIcon?: ReactNode
  /**
   * @description isLink 设置为 false
   */
  renderRightIcon?: ReactNode
  /**
   * @description 自定义value，优先级低于value
   */
  renderValue?: ReactNode
  /**
   * @description 标题栏大小，可选值为 large
   */
  size?: 'large'
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}

declare const CollapseItem: FunctionComponent<CollapseItemProps>

declare const Collapse: FunctionComponent<CollapseProps>

export { Collapse, CollapseItem }
