import { View } from '@tarojs/components'
import { TransitionPropsCom } from '../../types/transition'
import * as utils from '../wxs/utils'
import * as computed from './wxs'
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
      <View
        className={'van-transition ' + classes + ` ${className || ''}`}
        style={utils.style([
          computed.rootStyle({
            currentDuration,
            display,
          }),
          style,
        ])}
        {...others}
      >
        {children}
      </View>
    </>
  )
}
export default Transition
