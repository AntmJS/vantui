/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { useState, useEffect, useCallback, useRef } from 'react'
import * as utils from '../wxs/utils'
import { PopupProps } from '../../../types/popup'
import VanIcon from './../icon'
import * as computed from './wxs'
import { useTransition } from './../../mixins/transition'
import VanOverlay from './../overlay'

export default function Index(this: any, props: PopupProps) {
  const {
    show,
    duration,
    name,
    round,
    closeable,
    overlayStyle,
    transition,
    zIndex = 100,
    overlay = true,
    closeIcon = 'cross',
    closeIconPosition = 'topRight',
    closeOnClickOverlay = true,
    position = 'center',
    safeAreaInsetBottom = true,
    safeAreaInsetTop = false,
    lockScroll = true,
    children,
    clickOverlay,
    beforeEnter,
    beforeLeave,
    afterEnter,
    afterLeave,
    enter,
    leave,
    close,
    style,
    className,
    ...others
  } = props
  const onClickCloseIcon = useCallback(() => {
    close?.()
  }, [close])
  const onClickOverlay = useCallback(() => {
    clickOverlay?.()
    if (closeOnClickOverlay) {
      close?.()
    }
  }, [clickOverlay, close, closeOnClickOverlay])

  const [_name, setName] = useState(name)
  const [_duration, setDuration] = useState(0)
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
      beforeEnter,
      beforeLeave,
      afterEnter,
      afterLeave,
      enter,
      leave,
    })

  // observeShow(value, old) {
  //   if (value === old) {
  //     return
  //   }
  //   value ? this.enter() : this.leave()
  // },

  return (
    <>
      {overlay && (
        <VanOverlay
          show={show}
          zIndex={zIndex}
          style={overlayStyle}
          duration={duration}
          onClick={onClickOverlay}
          lockScroll={lockScroll}
        />
      )}
      {inited && (
        <View
          className={
            'custom-class ' +
            classes +
            ' ' +
            className +
            ' ' +
            utils.bem('popup', [
              position,
              {
                round,
                safe: safeAreaInsetBottom,
                safeTop: safeAreaInsetTop,
              },
            ])
          }
          style={computed.popupStyle({
            zIndex,
            currentDuration,
            display,
            style,
          })}
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
                closeIconPosition
              }
              onClick={onClickCloseIcon}
              info={null}
            ></VanIcon>
          )}
        </View>
      )}
    </>
  )
}
