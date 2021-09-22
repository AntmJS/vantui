import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface EmptyProps extends StandardProps {
  description?: string
  image?: string
  children?: ReactNode
  renderImage?: () => any
  renderDescription?: () => any
}

declare const Empty: ComponentClass<EmptyProps>

export { Empty }
