import { useCallback, useEffect, useState } from 'react'
import { OverlayProps } from '../../types/overlay'
import VanTransition from './../transition/h5-index'
function OverlayInner(props: OverlayProps & { setOuterShow?: any }) {
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
  } = props
  const _noop = useCallback((event) => {
    event.stopPropagation()
    event.preventDefault()
  }, [])
  return lockScroll ? (
    <VanTransition
      show={show}
      className={'van-overlay' + `  ${className}`}
      style={{
        zIndex: zIndex,
        ...(style as React.CSSProperties),
      }}
      duration={duration}
      onTouchMove={_noop}
      onAfterLeave={() => {
        setTimeout(() => {
          setOuterShow(false)
        }, 0)
      }}
      {...(others as any)}
    >
      {children}
    </VanTransition>
  ) : (
    <VanTransition
      show={show}
      className={'van-overlay' + `  ${className || ''}`}
      style={{
        zIndex: zIndex,
        ...(style as React.CSSProperties),
      }}
      duration={duration}
      onAfterLeave={() => setOuterShow(false)}
      {...(others as any)}
    >
      {children}
    </VanTransition>
  )
}
export function Overlay(props: OverlayProps) {
  const { show } = props
  const [innerShow, setInnerShow] = useState(false)
  useEffect(() => {
    if (show) {
      setInnerShow(true)
    }
  }, [show])
  return (
    <>
      {innerShow ? (
        <OverlayInner setOuterShow={setInnerShow} {...props} />
      ) : (
        <></>
      )}
    </>
  )
}

export default Overlay
