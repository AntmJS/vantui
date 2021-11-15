/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { useState, useEffect, useCallback, useRef } from 'react'
import * as utils from '../wxs/utils'
import { PopupProps } from '../../types/popup'
import { Popup as InnerPopup } from '../common/zIndex'
import VanIcon from './../icon'
import * as computed from './wxs'
import { useTransition } from './../mixins/transition'
import VanOverlay from './../overlay'

export function Popup(this: any, props: PopupProps) {
  const {
    show,
    duration = 300,
    round,
    closeable,
    overlayStyle,
    transition,
    zIndex = InnerPopup,
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
    style,
    className,
    ...others
  } = props
  const _onClickCloseIcon = useCallback(() => {
    onClose?.()
  }, [onClose])

  const _onClickOverlay = useCallback(() => {
    onClickOverlay?.()
    if (closeOnClickOverlay) {
      onClose?.()
    }
  }, [closeOnClickOverlay, onClickOverlay, onClose])

  const [_name, setName] = useState<any>('')
  const [_duration, setDuration] = useState(duration)
  const originDuration = useRef<any>(null)

  useEffect(() => {
    setName(transition || position)
    if (transition === 'none') {
      setDuration(0)
      originDuration.current = duration
    } else if (originDuration.current != null) {
      setDuration(originDuration.current)
    }
  }, [duration, position, transition])
  const { inited, currentDuration, classes, display, onTransitionEnd } =
    useTransition({
      show,
      duration: _duration,
      name: _name,
      onBeforeEnter,
      onBeforeLeave,
      onAfterEnter,
      onAfterLeave,
      onEnter,
      onLeave,
    })

  // observeShow(value, old) {
  //   if (value === old) {
  //     return
  //   }
  //   value ? this.enter() : this.leave()
  // },

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
export default Popup
