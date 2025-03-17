import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'
export interface IndexBarProps extends ViewProps {
  /**
   * @description 是否开启锚点自动吸顶
   * @default true
   */
  sticky?: boolean
  /**
   * @description z-index 层级
   * @default 1
   */
  zIndex?: number
  /**
   * @description 索引字符高亮颜色
   * @default #07c160
   */
  highlightColor?: string
  /**
   * @description 锚点自动吸顶时与顶部的距离
   * @default 0
   */
  stickyOffsetTop?: number
  /**
   * @description 索引字符列表
   * @default A-Z
   */
  indexList?: string[] | number[]
  /**
   * @description 选中字符时触发
   */
  onSelect?: (event: { detail: string | number }) => void
  /**
   * @description
   */
  children?: ReactNode
  /**
   * @description 微信端使用时, 所在元素层级太深，需要设置元素层级不是很深的父元素的className(‘.xx’)或id(#xx), 支持当前组件获取rect信息
   */
  rectWrapper?: string
}
declare const IndexBar: FunctionComponent<IndexBarProps>
export { IndexBar }
