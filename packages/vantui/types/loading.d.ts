import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface LoadingProps extends StandardProps {
  color?: string
  vertical?: boolean
  type?: string
  size?: string
  textSize?: string
}

declare const Loading: ComponentClass<LoadingProps>

export { Loading }
