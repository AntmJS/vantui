import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { ScrollViewProps } from '@tarojs/components/types/ScrollView'
export type PullRefreshStatus =
  | 'normal'
  | 'loading'
  | 'loosing'
  | 'pulling'
  | 'success'

interface PullRefreshProps {
  disabled?: boolean
  headHeight?: number | string
  successText?: string
  pullingText?: string
  loosingText?: string
  loadingText?: string
  pullDistance?: number | string
  successDuration?: number | string
  animationDuration?: number | string
  renderHead?: (params: {
    status: PullRefreshStatus
    distance: number
  }) => React.ReactNode | void
}

type eventType = {
  page: number
  pageSize: number
}

export interface PowerScrollViewProps<T = number>
  extends StandardProps,
    PullRefreshProps,
    Omit<ScrollViewProps, 'onScrollToUpper' | 'onScrollToLower'> {
  offset?: number
  total?: T
  current?: number
  pageSize?: number
  finished?: boolean
  errorText?: string
  loadingText?: string
  finishedText?: string
  immediateCheck?: boolean
  renderFinished?: React.ReactNode
  renderLoading?: React.ReactNode
  renderError?: React.ReactNode
  emptyDescription?: string
  emptyImage?: 'error' | 'search' | 'default' | 'network' | string
  onLoad?: (event: T extends number ? number : eventType) => Promise<void>
  onRefresh?: (event: T extends number ? number : eventType) => Promise<void>
  // Scroll
  onScrollToUpper?: (
    event: T extends number ? number : eventType,
  ) => Promise<void>
  onScrollToLower?: (
    event: T extends number ? number : eventType,
  ) => Promise<void>
}

declare const PowerScrollView: ComponentClass<PowerScrollViewProps>

export { PowerScrollView }
