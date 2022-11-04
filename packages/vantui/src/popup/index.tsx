/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { useState, useEffect, useCallback } from 'react'
import * as utils from '../wxs/utils'
import { PopupProps } from '../../types/popup'
import VanIcon from './../icon'
import * as computed from './wxs'
import { useTransition } from './../mixins/transition'
import VanOverlay from './../overlay'

function PopupInner(this: any, props: PopupProps & { setOuterShow?: any }) {
  const {
    show,
    duration = 300,
    round,
    closeable,
    transition,
    zIndex,
    closeIcon = 'cross',
    closeIconPosition = 'top-right',
    position = 'center',
    safeAreaInsetBottom = true,
    safeAreaInsetTop = false,
    children,
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
    setTimeout(() => {
      setOuterShow?.(false)
    }, 0)
  }, [onAfterLeave, setOuterShow])

  const _onClickCloseIcon = useCallback(() => {
    onClose?.()
  }, [onClose])

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

export function Popup(props: PopupProps) {
  const {
    show,
    duration = 300,
    zIndex,
    overlay = true,
    lockScroll = true,
    overlayStyle,
    closeOnClickOverlay = true,
    onClickOverlay,
    onClose,
  } = props
  const [innerShow, setInnerShow] = useState(false)
  useEffect(() => {
    if (show) {
      setInnerShow(true)
    }
  }, [show])

  const _onClickOverlay = useCallback(() => {
    onClickOverlay?.()
    if (closeOnClickOverlay) {
      onClose?.()
    }
  }, [closeOnClickOverlay, onClickOverlay, onClose])

  return (
    <View>
      <View>
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
      </View>
      <View>
        {innerShow ? (
          <PopupInner setOuterShow={setInnerShow} {...props} />
        ) : (
          <></>
        )}
      </View>
    </View>
  )
}

export default Popup
