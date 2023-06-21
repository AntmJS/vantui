import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface GridProps extends ViewProps {
  /**
   * @description 是否为正方形格子
   */
  square?: boolean
  /**
   * @description 格子间隔
   */
  gutter?: number | string
  /**
   * @description 是否开启点击反馈
   */
  clickable?: boolean
  /**
   * @description 列数
   */
  columnNum?: number | string
  /**
   * @description 是否居中排列
   */
  center?: boolean
  /**
   * @description 是否显示边框
   */
  border?: boolean
  /**
   * @description 内容对齐方式
   */
  direction?: 'horizontal'
  /**
   * @description 图标大小
   */
  iconSize?: string | number
  /**
   * @description 内容顺序反转
   */
  reverse?: boolean
  /**
   * @description 自定义内容
   */
  children?: React.ReactNode
}

export interface GridItemProps extends ViewProps {
  /**
   * @description 图标名称或图片链接
   * @default ''
   */
  icon?: string
  /**
   * @description 图标颜色
   * @default ''
   */
  iconColor?: string
  /**
   * @description 图标类名前缀，同 Icon 组件的 classPrefix 属性
   * @default ''
   */
  iconPrefix?: string
  /**
   * @description 是否显示图标右上角小红点
   * @default ''
   */
  dot?: boolean
  /**
   * @description 图标右上角提示信息
   * @default ''
   */
  info?: string | number | undefined
  /**
   * @description 图标右上角徽标的内容
   * @default ''
   */
  badge?: string | number | undefined
  /**
   * @description 文字描述
   * @default ''
   */
  text?: ReactNode
  /**
   * @description 点击后跳转的链接地址
   * @default ''
   */
  url?: string
  /**
   * @description 跳转类型
   * @default ''
   */
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  /**
   * @description 自定义内容
   * @default ''
   */
  children?: React.ReactNode
}

declare const GridItem: FunctionComponent<GridItemProps>

declare const Grid: FunctionComponent<GridProps>

export { Grid, GridItem }
