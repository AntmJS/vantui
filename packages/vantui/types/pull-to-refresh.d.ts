import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface IPullToRefreshProps extends ViewProps {
  children?: React.ReactNode
  /**
   * @description 下拉文案
   * @default `下拉刷新`
   */
  pullText?: React.ReactNode
  /**
   * @description 放开文案
   * @default `松开刷新`
   */
  releaseText?: React.ReactNode
  /**
   * @description 加载文案
   * @default `加载中...`
   */
  loadingText?: React.ReactNode
  /**
   * @description 自定义加载
   */
  renderLoading?: React.ReactNode
  /**
   * @description 加载成功文案
   * @default `刷新成功`
   */
  successText?: React.ReactNode
  /**
   * @description 触发刷新方法，返回Promise成功
   */
  onRefresh: () => Promise<undefined>
  /**
   * @description 可触发下拉的y轴间距，相对于PullToRefresh组件
   * @default `300`
   */
  touchMaxStart?: number
  /**
   * @description 高度
   * @default `40`
   */
  headHeight?: number
  /**
   * @description 是否禁用
   * @default `false`
   */
  disable?: boolean
  /**
   * @description 成功状态展示时长
   * @default `1000`
   */
  successDuration?: number
  /**
   * @description 触摸触发拖拽的最小停留时间
   * @default `400`
   */
  touchMinTime?: number
}

declare const PullToRefresh: FunctionComponent<IPullToRefreshProps>

export { PullToRefresh }
