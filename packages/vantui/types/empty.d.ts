import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface EmptyProps extends StandardProps {
  description?: string
  image?: 'error' | 'search' | 'default' | 'network' | string
  children?: ReactNode
  renderImage?: ReactNode
  renderDescription?: ReactNode
}

declare const Empty: ComponentClass<EmptyProps>

export { Empty }
