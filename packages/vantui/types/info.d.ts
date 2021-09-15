import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface InfoProps extends StandardProps {
  dot?: boolean
  info: string | null
  customStyle?: string
}

declare const Info: ComponentClass<InfoProps>

export { Info }
