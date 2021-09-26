import { StandardProps } from '@tarojs/components'
import { ComponentClass, ReactNode } from 'react'
export interface OverlayProps extends StandardProps {
  show?: boolean
  lockScroll?: boolean
  zIndex?: number
  duration?: number | { enter: number; leave: number }
  children?: ReactNode
}
declare const Overlay: ComponentClass<OverlayProps>

export { Overlay }
