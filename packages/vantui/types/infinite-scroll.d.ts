import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'

export interface InfiniteScrollProps extends ViewProps {
  /**
   * @description 类名
   */
  className?: string
  /**
   * @description 加载方法，初始化便触发，需要返回promise加上后续的状态
   */
  loadMore: () => Promise<'loading' | 'complete' | 'error'>
  /**
   * @description 所在父级的类名，不设置的话，相对于窗口计算InfiniteScroll的位置
   */
  parentClassName?: string
  /**
   * @description 加载完成文案
   * @default `没有更多了～`
   */
  completeText?: React.ReactNode
  /**
   * @description 加载文案
   * @default `加载中...`
   */
  loadingText?: React.ReactNode
  /**
   * @description 重新加载按钮
   * @default `重新加载`
   */
  reloadText?: React.ReactNode
  /**
   * @description 错误状态文案
   * @default `加载失败`
   */
  errorText?: React.ReactNode
  /**
   * @description 自定义完成状态的渲染
   */
  renderComplete?: React.ReactNode
  /**
   * @description 自定义loading状态的渲染
   */
  renderLoading?: React.ReactNode
  /**
   * @description 自定义error状态的渲染
   */
  renderError?: React.ReactNode
}

export interface InfiniteScrollInstance {
  /**
   * @description 重置加载状态
   * @param loadMore 是否触发加载方法
   */
  reset: (loadMore?: boolean) => Promise<null>
}

declare const InfiniteScroll: FunctionComponent<InfiniteScrollProps>

export { InfiniteScroll }
