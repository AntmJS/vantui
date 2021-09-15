import { ComponentClass } from 'react'
import { StandardProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'
export interface PopupProps extends TransitionProps, StandardProps {
  round?: boolean
  closeable?: boolean
  customStyle?: string
  overlayStyle?: string
  transition?: string
  zIndex?: number
  overlay?: boolean
  closeIcon?: string
  closeIconPosition?: string
  closeOnClickOverlay?: boolean
  position?: string
  safeAreaInsetBottom?: boolean
  safeAreaInsetTop?: boolean
  lockScroll?: boolean
  children?: JSX.Element | JSX.Element[] | string
  clickOverlay?: (...arg: any[]) => any
  close?: (...arg: any[]) => any
}

declare const Popup: ComponentClass<PopupProps>

export { Popup }
