import { View } from '@tarojs/components'
import { TransitionPropsCom } from '../../../types/transition'
import * as computed from './wxs'
import { useTransition } from './../../mixins/transition'
export default function Index(props: TransitionPropsCom) {
  const {
    beforeEnter,
    beforeLeave,
    afterEnter,
    afterLeave,
    enter,
    leave,
    duration,
    name,
    show,
    children,
    style,
    className,
    ...others
  } = props
  const { currentDuration, classes, display, onTransitionEnd } = useTransition({
    show,
    duration: duration,
    name: name,
    beforeEnter,
    beforeLeave,
    afterEnter,
    afterLeave,
    enter,
    leave,
  })

  return (
    <>
      <View
        className={'van-transition custom-class ' + classes + ' ' + className}
        style={computed.rootStyle({
          currentDuration,
          display,
          style,
        })}
        onTransitionEnd={onTransitionEnd}
        {...others}
      >
        {children}
      </View>
    </>
  )
}
