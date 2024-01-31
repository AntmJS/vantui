import { useState, useLayoutEffect } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { TabProps } from '../../types/tab'

export function Tab(
  props: TabProps & {
    active: boolean
    lazyRender: boolean
    animated?: boolean
    lazyTimeout?: number
  },
) {
  const [inited, setInited] = useState(false)
  const {
    children,
    style,
    className,
    active,
    lazyRender,
    lazyTimeout = 0,
    animated,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title,
    ...others
  } = props

  useLayoutEffect(
    function () {
      if (!lazyTimeout) {
        setInited(active)
      } else {
        setTimeout(() => {
          setInited(active)
        }, lazyTimeout)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [active],
  )

  return (
    <View
      className={
        ' ' +
        utils.bem('tab__pane', {
          active,
          inactive: !active,
        }) +
        ` ${className || ''}`
      }
      style={utils.style([active || animated ? '' : 'display: none;', style])}
      {...others}
    >
      {(inited || !lazyRender) && children}
    </View>
  )
}
export default Tab
