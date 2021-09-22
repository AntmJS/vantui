import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { TabProps } from '../../../types/tab'

export default function Index(
  props: TabProps & {
    active: boolean
    lazyRender: boolean
    animated?: boolean
  },
) {
  const [inited, setInited] = useState(false)
  const {
    children,
    style,
    className,
    active,
    lazyRender,
    animated,
    ...others
  } = props
  useEffect(
    function () {
      setInited((pre) => pre || active)
    },
    [active],
  )

  return (
    <View
      className={
        'custom-class ' +
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
