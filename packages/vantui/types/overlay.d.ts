import { ViewProps } from '@tarojs/components'
import { FunctionComponent, ReactNode } from 'react'
export interface OverlayProps extends ViewProps {
  show?: boolean
  lockScroll?: boolean
  zIndex?: number
  /**
   * @description 是否挂载到页面根节点，用于解决各种 fixed 失效问题
   * @default false
   */
  rootPortal?: boolean
  duration?:
    | string
    | number
    | { enter: string | number; leave: string | number }
  children?: ReactNode
}
declare const Overlay: FunctionComponent<OverlayProps>

export { Overlay }
