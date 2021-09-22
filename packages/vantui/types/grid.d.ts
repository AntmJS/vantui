import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface GridProps extends StandardProps {
  square?: boolean
  gutter?: number
  clickable?: boolean
  columnNum?: number
  center?: boolean
  border?: boolean
  direction?: string
  iconSize?: string
  reverse?: boolean
  children?: React.ReactNode
}

declare const Grid: ComponentClass<GridProps>

export { Grid }
