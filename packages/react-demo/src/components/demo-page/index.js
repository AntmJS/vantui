import { Icon } from '@antmjs/vantui'
import { navigateBack } from '@tarojs/taro'
import { View } from '@tarojs/components'
import * as React from 'react'
import './index.less'

export default function Page(props) {
  // eslint-disable-next-line react/prop-types
  const { title, children } = props

  const onBack = () => {
    if (process.env.LIBRARY_ENV === 'react') {
      history.go(-1)
    } else {
      navigateBack()
    }
  }

  return (
    <View className="demo-page">
      {'h5' === process.env.TARO_ENV && (
        <View className="demo-nav">
          <Icon name="arrow-left" className="demo-nav__back" onClick={onBack} />
          <View className="demo-nav__title">{title} </View>
        </View>
      )}
      {children}
    </View>
  )
}
