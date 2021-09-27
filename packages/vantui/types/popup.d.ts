import { ComponentClass, ReactNode } from 'react'
import { StandardProps } from '@tarojs/components'
import { TransitionProps } from './mixins/transition'
import { OverlayProps } from './overlay'

export interface PopupProps
  extends TransitionProps,
    StandardProps,
    OverlayProps {
  round?: boolean
  closeable?: boolean
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
  children?: ReactNode
  onClickOverlay?: () => void
  onClose?: (data?: string) => void
}

declare const Popup: ComponentClass<PopupProps>

export { Popup }
