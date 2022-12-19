import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface EllipsisProps extends ViewProps {
  /**
   * @description 内容
   */
  children: string
  /**
   * @description 默认是否展开
   * @default `false`
   */
  defaultExpand?: boolean
  /**
   * @description 展示几行
   * @default 1
   */
  rows?: number
  /**
   * @description 展开文案
   * @default `展开`
   */
  expandText?: string
  /**
   * @description 收起文案
   * @default `收起`
   */
  collapseText?: string
  /**
   * @description 省略的文案
   * @default `...`
   */
  symbol?: ReactNode
  /**
   * @description 是否要隐藏操作按钮
   * @default `false`
   */
  hiddenAction?: boolean
}

declare const Ellipsis: FunctionComponent<EllipsisProps>

export { Ellipsis }
