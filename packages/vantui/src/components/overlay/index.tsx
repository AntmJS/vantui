import { useCallback } from 'react'
import * as utils from '../wxs/utils'
import { Overlay } from '../common/zIndex'
import { OverlayProps } from '../../../types/overlay'
import VanTransition from './../transition'
export default function Index(props: OverlayProps) {
  const {
    show,
    zIndex = Overlay,
    style,
    className,
    lockScroll = true,
    duration = 300,
    children,
    ...others
  } = props
  const noop = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
  }, [])
  return lockScroll ? (
    <VanTransition
      show={show}
      className={'van-overlay' + `  ${className}`}
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      onTouchMove={noop}
      {...others}
    >
      {children}
    </VanTransition>
  ) : (
    <VanTransition
      show={show}
      className={'van-overlay' + `  ${className || ''}`}
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      {...others}
    >
      {children}
    </VanTransition>
  )
}
