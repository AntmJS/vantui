import { FunctionComponent } from 'react'
import { StandardProps } from '@tarojs/components'
export interface LoadingProps extends StandardProps {
  color?: string
  vertical?: boolean
  type?: 'spinner' | 'circular'
  size?: string | number
  textSize?: string | number
  children?: React.ReactNode
}

declare const Loading: FunctionComponent<LoadingProps>

export { Loading }
