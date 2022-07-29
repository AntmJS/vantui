import { FunctionComponent, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'

export interface GridProps extends StandardProps {
  square?: boolean
  gutter?: number | string
  clickable?: boolean
  columnNum?: number
  center?: boolean
  border?: boolean
  direction?: string
  iconSize?: string | number
  reverse?: boolean
  children?: React.ReactNode
}

export interface GridItemProps extends StandardProps {
  icon?: string
  iconColor?: string
  iconPrefix?: string
  dot?: boolean
  info?: string | number | undefined
  badge?: string | number | undefined
  text?: ReactNode
  url?: string
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  children?: React.ReactNode
}

declare const GridItem: FunctionComponent<GridItemProps>

declare const Grid: FunctionComponent<GridProps>

export { Grid, GridItem }
