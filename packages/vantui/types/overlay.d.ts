import { StandardProps } from '@tarojs/components'
export interface OverlayProps extends StandardProps {
  show?: boolean
  lockScroll?: boolean
  zIndex?: number
  duration?: number | { enter: number; leave: number }
  children?: JSX.Element | JSX.Element[] | string
}
