import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface SkeletonProps extends StandardProps {
  row?: number
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

declare const Skeleton: ComponentClass<SkeletonProps>

export { Skeleton }
