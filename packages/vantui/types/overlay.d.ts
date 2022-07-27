import { StandardProps } from '@tarojs/components'
import { FunctionComponent, ReactNode } from 'react'
export interface OverlayProps extends StandardProps {
  show?: boolean
  lockScroll?: boolean
  zIndex?: number
  duration?:
    | string
    | number
    | { enter: string | number; leave: string | number }
  children?: ReactNode
}
declare const Overlay: FunctionComponent<OverlayProps>

export { Overlay }
