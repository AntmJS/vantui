import { Text, View } from '@tarojs/components'
import React from 'react'

import { IndexAnchorProps } from './../../../types/index-anchor'
export default function Index(
  props: IndexAnchorProps & {
    anchorStyle: React.CSSProperties
    wrapperStyle: React.CSSProperties
    active: boolean
  },
) {
  const { wrapperStyle, active, anchorStyle, index, children } = props
  return (
    <View className="van-index-anchor-wrapper" style={wrapperStyle}>
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
Index.displayName = 'IndexAnchor'
