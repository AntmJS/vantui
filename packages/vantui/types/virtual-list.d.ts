import { FunctionComponent, ReactNode, CSSProperties } from 'react'
import { ViewProps } from '@tarojs/components'

export interface IVirtualListProps<T> extends ViewProps {
  /**
   * @description 列容器的样式
   */
  listStyle?: CSSProperties
  /**
   * @description 列容器的样式名
   */
  listClssName?: string
  /**
   * @description 滚动外层容器高度
   */
  height: number | string
  /**
   * @description 底部额外渲染
   */
  footer?: ReactNode
  /**
   * @description 可视区域展示的最大数量, 高度不一的时候按全部最小高度展示去计算
   */
  showCount: number
  /**
   * @description 数据源，数组
   */
  dataSource: Array<T>
  /**
   * @description 自定义渲染每一项
   */
  ItemRender: FunctionComponent<
    {
      item: T
      index?: number
    } & ViewProps
  >
  /**
   * @description 自定义回到顶部按钮渲染
   */
  renderBackToTop?: ReactNode
  /**
   * @description 成功返回顶部后执行
   */
  backToTopSuccess?: () => void
  /**
   * @description 展示返回顶端按钮的临界值，上方隐藏了多少个ItemRender
   * @default `showCount`
   */
  backToTopCritical?: number
}

/**
 * @title 组件实例
 */
export type IVirtualListInstance = {
  /**
   * @description 重置状态
   */
  reset: () => void
  /**
   * @description 返回顶部
   */
  backToTop: () => void
}

declare const VirtualList: <T>(
  props: IVirtualListProps<T>,
) => JSX.Element | null

export { VirtualList }
