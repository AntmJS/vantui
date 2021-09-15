import { useState, useEffect, useCallback, useRef } from 'react'
import { TransitionProps } from '../../../types/mixins/transition'
import { isObj } from '../common/validator.js'
const getClassNames = (name: string) => ({
  enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
  leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
})
export function useTransition({
  show = false,
  duration = 300,
  name = 'fade',
  beforeEnter,
  beforeLeave,
  afterEnter,
  afterLeave,
  enter,
  leave,
}: TransitionProps) {
  const transitionEnded = useRef(false)
  const status = useRef('')
  const [display, setDisplay] = useState(false)
  const [inited, setInited] = useState(false)
  const [currentDuration, setCurrentDuration] = useState(0)
  const [classes, setClasses] = useState('')
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

  return {
    inited,
    currentDuration,
    classes,
    _leave,
    _enter,
  }
}
