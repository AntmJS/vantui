import { StandardProps } from '@tarojs/components'
import { ComponentClass, ReactNode } from 'react'
export interface OverlayProps extends StandardProps {
  show?: boolean
  lockScroll?: boolean
  zIndex?: string | number
  duration?:
    | string
    | number
    | { enter: string | number; leave: string | number }
  children?: ReactNode
}
declare const Overlay: ComponentClass<OverlayProps>

export { Overlay }
