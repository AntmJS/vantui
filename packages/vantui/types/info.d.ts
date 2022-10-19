import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface InfoProps extends ViewProps {
  dot?: boolean
  info?: ReactNode | number
  style?: string
}

declare const Info: FunctionComponent<InfoProps>

export { Info }
