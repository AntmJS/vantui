import { ComponentClass, ReactNode } from 'react'
import { ButtonProps } from './button'

export interface GoodsActionIconProps
  extends Omit<ButtonProps, 'size' | 'square' | 'children'> {
  url?: string
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  text?: string
  dot?: boolean
  info?: string
  icon?: string
  renderIcon?: ReactNode
  children?: ReactNode
}

declare const GoodsActionIcon: ComponentClass<GoodsActionIconProps>

export { GoodsActionIcon }
