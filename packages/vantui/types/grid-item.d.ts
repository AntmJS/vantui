import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface GridItemProps extends StandardProps {
  icon?: string
  iconColor?: string
  iconPrefix?: string
  dot?: boolean
  info?: string | number | undefined
  badge?: string | number | undefined
  text?: string
  useSlot?: boolean
  children?: React.ReactNode
}

declare const GridItem: ComponentClass<GridItemProps>

export { GridItem }
