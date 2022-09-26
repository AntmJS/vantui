import { TransitionPropsCom } from '../../types/transition'
import { useTransition } from './../mixins/transition'

export function Transition(props: TransitionPropsCom) {
  const {
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
    onEnter,
    onLeave,
    duration,
    name,
    show,
    children,
    style,
    className,
    enterClass,
    enterActiveClass,
    enterToClass,
    leaveClass,
    leaveActiveClass,
    leaveToClass,
    ...others
  } = props
  const { currentDuration, classes, display } = useTransition({
    show,
    duration: duration,
    name: name,
    enterClass,
    enterActiveClass,
    enterToClass,
    leaveClass,
    leaveActiveClass,
    leaveToClass,
    onBeforeEnter,
    onBeforeLeave,
    onAfterEnter,
    onAfterLeave,
    onEnter,
    onLeave,
  })

  return (
    <>
      <div
        className={'van-transition ' + classes + ` ${className || ''}`}
        style={{
          WebkitTransitionDuration: currentDuration + 'ms',
          transitionDuration: currentDuration + 'ms',
          display: display ? undefined : 'none',
          ...(style as React.CSSProperties),
        }}
        {...(others as any)}
      >
        {children}
      </div>
    </>
  )
}
export default Transition
