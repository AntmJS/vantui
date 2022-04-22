import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import * as utils from '../wxs/utils'
import { TabProps } from '../../types/tab'

export function Tab(
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    title,
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
