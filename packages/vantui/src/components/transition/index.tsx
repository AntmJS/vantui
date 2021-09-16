import { View } from '@tarojs/components'
import { TransitionPropsCom } from '../../../types/transition'
import * as utils from '../wxs/utils'
import * as computed from './wxs'
import { useTransition } from './../../mixins/transition'
export default function Index(props: TransitionPropsCom) {
  const {
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

  return (
    <>
      <View
        className={'van-transition custom-class ' + classes + ` ${className}`}
        style={utils.style([
          computed.rootStyle({
            currentDuration,
            display,
          }),
          style,
        ])}
        onTransitionEnd={onTransitionEnd}
        {...others}
      >
        {children}
      </View>
    </>
  )
}
