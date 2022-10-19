import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface GridProps extends ViewProps {
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

export interface GridItemProps extends ViewProps {
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
