import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface SkeletonProps extends ViewProps {
  /**
   * @description 段落占位图行数
   * @default 0
   */
  row?: number | string
  /**
   * @description 是否显示标题占位图
   */
  title?: boolean
  /**
   * @description 是否显示头像占位图
   * @default false
   */
  avatar?: boolean
  /**
   * @description 是否显示占位图，传false时会展示子组件内容
   * @default true
   */
  loading?: boolean
  /**
   * @description 是否开启动画
   * @default true
   */
  animate?: boolean
  /**
   * @description 头像占位图大小
   * @default 32px
   */
  avatarSize?: string | number
  /**
   * @description 	头像占位图形状，可选值为square
   * @default round
   */
  avatarShape?: 'square' | 'round'
  /**
   * @description 标题占位图宽度
   * @default 40%
   */
  titleWidth?: string | number
  /**
   * @description 段落占位图宽度，可传数组来设置每一行的宽度
   * @default 100%
   */
  rowWidth?: string | string[]
  /**
   * @description
   */
  children?: ReactNode
}

declare const Skeleton: FunctionComponent<SkeletonProps>

export { Skeleton }
