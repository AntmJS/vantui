import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface DividerProps extends StandardProps {
  dashed?: boolean
  hairline?: boolean
  contentPosition?: string
  fontSize?: string
  borderColor?: string
  textColor?: string
  customStyle?: string
  children?: JSX.Element | JSX.Element[] | string
}

declare const Divider: ComponentClass<DividerProps>

export { Divider }
