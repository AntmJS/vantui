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
  renderHead?: (
    status: PullRefreshStatus,
    distance: number,
  ) => React.ReactNode | void
  onRefresh?: () => Promise<any>
}

export interface ListProps
  extends StandardProps,
    PullRefreshProps,
    ScrollViewProps {
  offset?: number // makeNumericProp(300),
  finished?: boolean
  errorText?: string
  loadingText?: string
  finishedText?: string
  immediateCheck?: boolean
  renderFinished?: React.ReactNode
  renderLoading?: React.ReactNode
  renderError?: React.ReactNode
  onLoad?: () => Promise<any>
}

declare const List: ComponentClass<ListProps>

export { List }
