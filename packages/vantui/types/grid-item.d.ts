import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'

export interface GridItemProps extends StandardProps {
  icon?: string
  iconColor?: string
  iconPrefix?: string
  dot?: boolean
  info?: null
  badge?: null
  text?: string
  useSlot?: boolean
  children?: JSX.Element
}

declare const GridItem: ComponentClass<GridItemProps>

export { GridItem }
