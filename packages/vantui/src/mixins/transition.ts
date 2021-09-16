import { useState, useEffect, useCallback, useRef } from 'react'
import { isObj } from './../components/common/validator'
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
<<<<<<< HEAD
      onAfterEnter?.()
    } else {
      onAfterLeave?.()
=======
      afterEnter?.()
    } else {
      afterLeave?.()
>>>>>>> main
    }

    if (!show && display) {
      // this.setData({ display: false })
      setDisplay(false)
    }
<<<<<<< HEAD
  }, [display, onAfterEnter, onAfterLeave, show])
=======
  }, [afterEnter, afterLeave, display, show])
>>>>>>> main
  const _enter = useCallback(() => {
    // const { duration, name } = this.data
    const classNames = getClassNames(name)
    const currentDuration = isObj(duration) ? (duration as any).enter : duration
    status.current = 'enter'
    // this.$emit('before-enter')
<<<<<<< HEAD
    onBeforeEnter?.()
=======
    beforeEnter?.()
>>>>>>> main
    requestAnimationFrame(() => {
      if (status.current !== 'enter') {
        return
      }
<<<<<<< HEAD
      onEnter?.()
=======
      enter?.()
>>>>>>> main
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
<<<<<<< HEAD
  }, [duration, name, onBeforeEnter, onEnter])
=======
  }, [beforeEnter, duration, enter, name])
>>>>>>> main
  const _leave = useCallback(() => {
    if (!display) {
      return
    }
    // const { duration, name } = this.data
    const classNames = getClassNames(name)
    const currentDuration = isObj(duration) ? (duration as any).leave : duration
    status.current = 'leave'
<<<<<<< HEAD
    onBeforeLeave?.()
=======
    beforeLeave?.()
>>>>>>> main
    requestAnimationFrame(() => {
      if (status.current !== 'leave') {
        return
      }
      // this.$emit('leave')
<<<<<<< HEAD
      onLeave?.()
=======
      leave?.()
>>>>>>> main
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
<<<<<<< HEAD
  }, [display, duration, name, onBeforeLeave, onLeave, onTransitionEnd])
=======
  }, [beforeLeave, display, duration, leave, name, onTransitionEnd])
>>>>>>> main
  useEffect(() => {
    show ? _enter() : _leave()
  }, [_enter, _leave, show])

  return {
    display,
    inited,
    currentDuration,
    classes,
    onTransitionEnd,
  }
}
