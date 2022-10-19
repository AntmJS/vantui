import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface EmptyProps extends ViewProps {
  description?: string
  image?: 'error' | 'search' | 'default' | 'network' | string
  children?: ReactNode
  renderImage?: ReactNode
  renderDescription?: ReactNode
}

declare const Empty: FunctionComponent<EmptyProps>

export { Empty }
