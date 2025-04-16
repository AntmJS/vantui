import { useCallback, useEffect, useState } from 'react'
import * as utils from '../wxs/utils'
import { OverlayProps } from '../../types/overlay'
import { get } from '../default-props'
import VanTransition from './../transition'
import VanRootPortal from './../root-portal'

function OverlayInner(props: OverlayProps & { setOuterShow?: any }) {
  const [d] = useState(get().Overlay)
  const {
    show,
    zIndex,
    style,
    className,
    lockScroll = true,
    duration = 300,
    setOuterShow,
    children,
    ...others
  } = {
    ...d,
    ...props,
  }
  const _noop = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
  }, [])
  return lockScroll ? (
    <VanTransition
      show={show}
      className={'van-overlay' + `  ${className || ''}`}
      style={utils.style([{ 'z-index': zIndex }, style])}
      duration={duration}
      onTouchMove={_noop}
      onAfterLeave={() => {
        setTimeout(() => {
          setOuterShow(false)
        }, 0)
      }}
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
      onAfterLeave={() => setOuterShow(false)}
      {...others}
    >
      {children}
    </VanTransition>
  )
}
export function Overlay(props: OverlayProps) {
  const { show, rootPortal } = props
  const [innerShow, setInnerShow] = useState(false)
  useEffect(() => {
    if (show) {
      setInnerShow(true)
    }
  }, [show])

  return (
    <VanRootPortal enable={rootPortal}>
      {innerShow ? (
        <OverlayInner setOuterShow={setInnerShow} {...props} />
      ) : (
        <></>
      )}
    </VanRootPortal>
  )
}

export default Overlay
