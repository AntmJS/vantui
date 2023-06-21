import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface SkeletonProps extends ViewProps {
  row?: number | string
  title?: boolean
  avatar?: boolean
  loading?: boolean
  animate?: boolean
  avatarSize?: string | number
  avatarShape?: 'square' | 'round'
  titleWidth?: string | number
  rowWidth?: string | string[]
  children?: ReactNode
}

declare const Skeleton: FunctionComponent<SkeletonProps>

export { Skeleton }
