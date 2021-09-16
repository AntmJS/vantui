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
<<<<<<< HEAD
    duration = 300,
=======
    duration,
    name,
>>>>>>> main
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
<<<<<<< HEAD
    onClickOverlay,
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
    onEnter,
    onLeave,
    onClose,
=======
    clickOverlay,
    beforeEnter,
    beforeLeave,
    afterEnter,
    afterLeave,
    enter,
    leave,
    close,
>>>>>>> main
    style,
    className,
    ...others
  } = props
  const onClickCloseIcon = useCallback(() => {
<<<<<<< HEAD
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
=======
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
>>>>>>> main
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
<<<<<<< HEAD
=======

>>>>>>> main
  const { inited, currentDuration, classes, display, onTransitionEnd } =
    useTransition({
      show,
      duration: _duration,
      name: _name,
<<<<<<< HEAD
      onBeforeEnter,
      onBeforeLeave,
      onAfterEnter,
      onAfterLeave,
      onEnter,
      onLeave,
=======
      beforeEnter,
      beforeLeave,
      afterEnter,
      afterLeave,
      enter,
      leave,
>>>>>>> main
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
<<<<<<< HEAD
          onClick={_onClickOverlay}
=======
          onClick={onClickOverlay}
>>>>>>> main
          lockScroll={lockScroll}
        />
      )}
      {inited && (
        <View
          className={
            'custom-class ' +
            classes +
            ' ' +
<<<<<<< HEAD
=======
            className +
            ' ' +
>>>>>>> main
            utils.bem('popup', [
              position,
              {
                round,
                safe: safeAreaInsetBottom,
                safeTop: safeAreaInsetTop,
              },
<<<<<<< HEAD
            ]) +
            `  ${className}`
          }
          style={utils.style([
            computed.popupStyle({
              zIndex,
              currentDuration,
              display,
            }),
            style,
          ])}
=======
            ])
          }
          style={computed.popupStyle({
            zIndex,
            currentDuration,
            display,
            style,
          })}
>>>>>>> main
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
<<<<<<< HEAD
=======
              info={null}
>>>>>>> main
            ></VanIcon>
          )}
        </View>
      )}
    </>
  )
}
