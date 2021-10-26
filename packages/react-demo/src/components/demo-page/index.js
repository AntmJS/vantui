import { Icon } from '@antmjs/vantui'
import { View } from '@tarojs/components'
import * as React from 'react'
import './index.less'

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props

  return (
    <View className="demo-page">
      <View className="demo-nav">
        <Icon
          name="arrow-left"
          className="demo-nav__back"
          onClick={() => history.go(-1)}
        />
        <View className="demo-nav__title">{title} </View>
      </View>
      {children}
    </View>
  )
}
