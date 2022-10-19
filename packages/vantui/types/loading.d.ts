import { FunctionComponent } from 'react'
import { ViewProps } from '@tarojs/components'
export interface LoadingProps extends ViewProps {
  color?: string
  vertical?: boolean
  type?: 'spinner' | 'circular'
  size?: string | number
  textSize?: string | number
  children?: React.ReactNode
}

declare const Loading: FunctionComponent<LoadingProps>

export { Loading }
