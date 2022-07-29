import { FunctionComponent, ReactNode } from 'react'
import { ButtonProps } from './button'

export interface GoodsActionButtonProps extends Omit<ButtonProps, 'children'> {
  url?: string
  linkType?: 'navigateTo' | 'reLaunch' | 'redirectTo'
  text?: string
  children?: ReactNode
}

declare const GoodsActionButton: FunctionComponent<GoodsActionButtonProps>

export { GoodsActionButton }
