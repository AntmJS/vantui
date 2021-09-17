import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface EmptyProps extends StandardProps {
  description?: string
  image?: string
  children?: JSX.Element | JSX.Element[] | string
  renderImage?: () => any
  renderDescription?: () => any
}

declare const Empty: ComponentClass<EmptyProps>

export { Empty }
