/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import * as utils from '../wxs/utils'
import { PopupProps } from '../../types/popup'
import VanIcon from './../icon'
import * as computed from './wxs'
import { useTransition } from './../mixins/transition'
import VanOverlay from './../overlay'

export function Popup(this: any, props: PopupProps & { setOuterShow?: any }) {
  const {
    show,
    duration = 300,
    round,
    closeable,
    overlayStyle,
    transition,
    zIndex,
    overlay = true,
    closeIcon = 'cross',
    closeIconPosition = 'top-right',
    closeOnClickOverlay = true,
    position = 'center',
    safeAreaInsetBottom = true,
    safeAreaInsetTop = false,
    lockScroll = true,
    children,
    onClickOverlay,
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
    onEnter,
    onLeave,
    onClose,
    setOuterShow,
    style,
    className,
    ...others
  } = props
  const _onAfterLeave = useCallback(() => {
    onAfterLeave?.()
    setOuterShow?.()
  }, [onAfterLeave, setOuterShow])

  const _onClickCloseIcon = useCallback(() => {
    onClose?.()
  }, [onClose])

  const _onClickOverlay = useCallback(() => {
    onClickOverlay?.()
    if (closeOnClickOverlay) {
      onClose?.()
    }
  }, [closeOnClickOverlay, onClickOverlay, onClose])

  const { inited, currentDuration, classes, display, onTransitionEnd } =
    useTransition({
      show,
      duration: transition === 'none' ? 0 : duration,
      name: transition || position,
      onBeforeEnter,
      onBeforeLeave,
      onAfterEnter,
      onAfterLeave: _onAfterLeave,
      onEnter,
      onLeave,
    })

  const getClassName = useCallback((name) => {
    return name.replace(/([A-Z])/g, (_: string, $1: string) => {
      return '-' + $1?.toLowerCase()
    })
  }, [])

  return (
    <>
      {overlay && (
        <VanOverlay
          show={show}
          zIndex={zIndex}
          style={overlayStyle}
          duration={duration}
          onClick={_onClickOverlay}
          lockScroll={lockScroll}
        />
      )}
      {inited && (
        <View
          className={
            classes +
            ' ' +
            utils.bem('popup', [
              position,
              {
                round,
                safe: safeAreaInsetBottom,
                safeTop: safeAreaInsetTop,
              },
            ]) +
            `  ${className || ''}`
          }
          style={utils.style([
            computed.popupStyle({
              zIndex,
              currentDuration,
              display,
            }),
            style,
          ])}
          onTransitionEnd={onTransitionEnd}
          {...others}
        >
          {children}
          {closeable && (
            // @ts-check
            <VanIcon
              name={closeIcon}
              className={
                'close-icon-class van-popup__close-icon van-popup__close-icon--' +
                getClassName(closeIconPosition)
              }
              onClick={_onClickCloseIcon}
            ></VanIcon>
          )}
        </View>
      )}
    </>
  )
}

export default function Index(props: PopupProps) {
  const { show } = props
  const [innerShow, setInnerShow] = useState(false)
  useEffect(() => {
    if (show) {
      setInnerShow(true)
    }
  }, [show])
  return (
    <>{innerShow ? <Popup setOuterShow={setInnerShow} {...props} /> : <></>}</>
  )
}
