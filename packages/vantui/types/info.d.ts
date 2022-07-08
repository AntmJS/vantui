import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface InfoProps extends StandardProps {
  dot?: boolean
  info?: ReactNode | number
  style?: string
}

declare const Info: ComponentClass<InfoProps>

export { Info }
