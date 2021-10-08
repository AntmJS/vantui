import { View } from '@tarojs/components'
import { TransitionPropsCom } from '../../../types/transition'
import * as utils from '../wxs/utils'
import * as computed from './wxs'
import { useTransition } from './../mixins/transition'
export default function Index(props: TransitionPropsCom) {
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
    ...others
  } = props
  const { currentDuration, classes, display, onTransitionEnd } = useTransition({
    show,
    duration: duration,
    name: name,
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
        onTransitionEnd={onTransitionEnd}
        {...others}
        catchMove
      >
        {children}
      </View>
    </>
  )
}
