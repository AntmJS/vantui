import { Text, View } from '@tarojs/components'
import React from 'react'
import * as utils from '../wxs/utils'
import { IndexAnchorProps } from './../../types/index-anchor'
export function IndexAnchor(
  props: IndexAnchorProps & {
    anchorStyle: React.CSSProperties
    wrapperStyle: React.CSSProperties
    active: boolean
  },
) {
  const {
    wrapperStyle,
    active,
    anchorStyle,
    index,
    children,
    style,
    className,
    ...others
  } = props
  return (
    <View
      className={`van-index-anchor-wrapper ${className || ''}`}
      style={utils.style([wrapperStyle, style])}
      {...others}
    >
      <View
        className={
          'van-index-anchor ' +
          (active ? 'van-index-anchor--active van-hairline--bottom' : '')
        }
        style={anchorStyle}
      >
        {children ? (
          <>{children}</>
        ) : (
          <>
            <Text>{index}</Text>
          </>
        )}
      </View>
    </View>
  )
}
IndexAnchor.displayName = 'IndexAnchor'
export default IndexAnchor
