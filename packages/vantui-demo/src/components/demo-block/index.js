/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { Component } from 'react'

import './index.less'
// eslint-disable
export default class Index extends Component {
  constructor() {
    super()
  }
  render() {
    // eslint-disable-next-line react/prop-types
    const { padding, title, card } = this.props
    return (
      <View
        className={
          'custom-class demo-block van-clearfix ' +
          (padding ? 'demo-block--padding' : '')
        }
      >
        {title && <View className="demo-block__title">{title}</View>}
        {card ? (
          <View className="demo-block__card">{this.props.children}</View>
        ) : (
          this.props.children
        )}
      </View>
    )
  }
}
