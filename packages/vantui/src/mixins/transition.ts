import { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import { isObj } from './../common/validator'
import { TransitionProps } from './../../types/mixins/transition'
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
  onBeforeEnter,
  onBeforeLeave,
  onAfterEnter,
  onAfterLeave,
  onEnter,
  onLeave,
  enterClass,
  enterActiveClass,
  enterToClass,
  leaveClass,
  leaveActiveClass,
  leaveToClass,
}: TransitionProps) {
  const transitionEnded = useRef(false)
  const status = useRef('')
  const [display, setDisplay] = useState(false)
  const [inited, setInited] = useState(false)
  const [currentDuration, setCurrentDuration] = useState(0)
  const [classes, setClasses] = useState('')
  const classNames = useMemo(() => {
    const names = getClassNames(name)
    if (!name) {
      names['enter'] += ` ${enterClass ?? ''}`
      names['enter-to'] += `${enterToClass ?? ''} ${enterActiveClass ?? ''} `
      names['leave'] += `  ${leaveClass ?? ''}`
      names['leave-to'] += ` ${leaveToClass ?? ''} ${leaveActiveClass ?? ''}`
    }
    return names
  }, [
    enterActiveClass,
    enterClass,
    enterToClass,
    leaveActiveClass,
    leaveClass,
    leaveToClass,
    name,
  ])
  const onTransitionEnd = useCallback(() => {
    if (transitionEnded.current) {
      return
    }
    transitionEnded.current = true
    if (status.current === 'enter') {
      onAfterEnter?.()
    } else {
      onAfterLeave?.()
    }

    if (!show && display) {
      // this.setData({ display: false })
      setDisplay(false)
    }
  }, [display, onAfterEnter, onAfterLeave, show])
  const _enter = useCallback(() => {
    // debugger
    // const { duration, name } = this.data

    const currentDuration = isObj(duration) ? (duration as any).enter : duration
    status.current = 'enter'
    // this.$emit('before-enter')
    onBeforeEnter?.()
    requestAnimationFrame(() => {
      if (status.current !== 'enter') {
        return
      }
      onEnter?.()
      setInited(true)
      setDisplay(true)
      setClasses(classNames.enter)
      setCurrentDuration(currentDuration)
      requestAnimationFrame(() => {
        if (status.current !== 'enter') {
          return
        }
        transitionEnded.current = false
        setTimeout(() => onTransitionEnd(), currentDuration)
        setClasses(classNames['enter-to'])
      })
    })
  }, [duration, onBeforeEnter, onEnter, classNames, onTransitionEnd])
  const _leave = useCallback(() => {
    if (!display) {
      return
    }
    const currentDuration = isObj(duration) ? (duration as any).leave : duration
    status.current = 'leave'
    onBeforeLeave?.()
    requestAnimationFrame(() => {
      if (status.current !== 'leave') {
        return
      }
      // this.$emit('leave')
      onLeave?.()
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
  }, [classNames, display, duration, onBeforeLeave, onLeave, onTransitionEnd])
  useEffect(() => {
    if (show && (!classes || !classes.includes(classNames['enter-to']))) {
      _enter()
    }
    if (!show) {
      _leave()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  return {
    display,
    inited,
    currentDuration,
    classes,
    onTransitionEnd,
  }
}
