/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { useState, useEffect, useCallback, useRef } from 'react'
import * as utils from '../wxs/utils'
import { PopupProps } from '../../../types/popup'
import { isObj } from '../common/validator.js'
import VanIcon from './../icon'
import * as computed from './wxs'

const getClassNames = (name: string) => ({
  enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
  leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
})
export default function Index(this: any, props: PopupProps) {
  const {
    show = false,
    duration = 300,
    name = 'fade',
    round,
    closeable,
    customStyle,
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
  const transitionEnded = useRef(false)
  const status = useRef('')

  const onClickCloseIcon = useCallback(() => {
    close?.()
  }, [close])
  const onClickOverlay = useCallback(() => {
    clickOverlay?.()
    if (closeOnClickOverlay) {
      close?.()
    }
  }, [clickOverlay, close, closeOnClickOverlay])

  // const [type, setType] = useState('')
  const [inited, setInited] = useState(false)
  const [display, setDisplay] = useState(false)
  const [currentDuration, setCurrentDuration] = useState(0)
  const [classes, setClasses] = useState('')

  // observeShow(value, old) {
  //   if (value === old) {
  //     return
  //   }
  //   value ? this.enter() : this.leave()
  // },

  const onTransitionEnd = useCallback(() => {
    if (transitionEnded.current) {
      return
    }
    transitionEnded.current = true
    if (status.current === 'enter') {
      afterEnter?.()
    } else {
      afterLeave?.()
    }

    if (!show && display) {
      // this.setData({ display: false })
      setDisplay(false)
    }
  }, [afterEnter, afterLeave, display, show])
  const _enter = useCallback(() => {
    // const { duration, name } = this.data
    const classNames = getClassNames(name)
    const currentDuration = isObj(duration) ? (duration as any).enter : duration
    status.current = 'enter'
    // this.$emit('before-enter')
    beforeEnter?.()
    requestAnimationFrame(() => {
      if (status.current !== 'enter') {
        return
      }
      enter?.()
      setInited(true)
      setDisplay(true)
      setClasses(classNames.enter)
      setCurrentDuration(currentDuration)
      requestAnimationFrame(() => {
        if (status.current !== 'enter') {
          return
        }
        transitionEnded.current = false
        setClasses(classNames['enter-to'])
      })
    })
  }, [beforeEnter, duration, enter, name])
  const _leave = useCallback(() => {
    if (!display) {
      return
    }
    // const { duration, name } = this.data
    const classNames = getClassNames(name)
    const currentDuration = isObj(duration) ? (duration as any).leave : duration
    status.current = 'leave'
    beforeLeave?.()
    requestAnimationFrame(() => {
      if (status.current !== 'leave') {
        return
      }
      // this.$emit('leave')
      leave?.()
      setClasses(classNames.leave)
      setCurrentDuration(currentDuration)

      requestAnimationFrame(() => {
        if (status.current !== 'leave') {
          return
        }
        transitionEnded.current = false
        setTimeout(() => onTransitionEnd(), currentDuration)
        setClasses(classNames['leave-to'])
      })
    })
  }, [beforeLeave, display, duration, leave, name, onTransitionEnd])

  useEffect(() => {
    show ? _enter() : _leave()
  }, [_enter, _leave, show])

  // useEffect(() => {
  //   const updateData = {
  //     name: transition || position,
  //     duration: null,
  //   }
  //   if (transition === 'none') {
  //     updateData.duration = 0
  //     // setD
  //     this.originDuration = duration
  //   } else if (this.originDuration != null) {
  //     updateData.duration = this.originDuration
  //   }
  //   this.setData(updateData)
  // })

  return (
    <>
      {/* {overlay && (
        <VanOverlay
          show={show}
          zIndex={zIndex}
          customStyle={overlayStyle}
          duration={duration}
          onClick={onClickOverlay}
          lockScroll={lockScroll}
        ></VanOverlay>
      )} */}
      {inited && (
        <View
          className={
            'custom-class ' +
            classes +
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
            customStyle,
          })}
          onTransitionEnd={onTransitionEnd}
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
