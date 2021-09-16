import { useCallback } from 'react'
import * as utils from '../wxs/utils'
import { OverlayProps } from '../../../types/overlay'
import VanTransition from './../transition'
export default function Index(props: OverlayProps) {
  const {
    show,
    zIndex = 1,
    style,
    lockScroll = true,
    duration = 300,
    children,
    onClick,
  } = props
  const noop = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
  }, [])
  // className={
  //   computed.rootClass({
  //     classPrefix,
  //     name,
  //   }) + ` ${className}`
  // }
  // style={utils.style([
  //   computed.rootStyle({
  //     customStyle,
  //     color,
  //     size,
  //   }),
  //   style,
  // ])}
  return lockScroll ? (
    <VanTransition
      show={show}
      className="van-overlay"
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      onTouchMove={noop}
    >
      {children}
    </VanTransition>
  ) : (
    <VanTransition
      show={show}
      className="van-overlay"
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      onClick={(e) => onClick?.(e)}
    >
      {children}
    </VanTransition>
  )
}
