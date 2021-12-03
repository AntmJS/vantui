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
  onRefresh?: () => Promise<void>
}

export interface PowerScrollViewProps
  extends StandardProps,
    PullRefreshProps,
    Omit<ScrollViewProps, 'onScrollToUpper' | 'onScrollToLower'> {
  offset?: number
  finished?: boolean
  errorText?: string
  loadingText?: string
  finishedText?: string
  immediateCheck?: boolean
  renderFinished?: React.ReactNode
  renderLoading?: React.ReactNode
  renderError?: React.ReactNode
  onLoad?: () => Promise<void>
  // Scroll
  onScrollToUpper?: () => Promise<void>
  onScrollToLower?: () => Promise<void>
}

declare const PowerScrollView: ComponentClass<PowerScrollViewProps>

export { PowerScrollView }
