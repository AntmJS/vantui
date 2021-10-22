/* eslint-disable react/prop-types */
import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Icon } from '@antmjs/vantui'
import './index.less'

export default class Index extends React.Component {
  onClick = (event) => {
    const { url } = event.target.dataset
    if (Taro.getCurrentPages().length > 9) {
      Taro.redirectTo({ url })
    } else {
      Taro.navigateTo({ url })
    }
  }
  render() {
    const { group } = this.props

    return (
      <View className="demo-home-nav">
        <View className="demo-home-nav__title">{group.groupName}</View>
        <View className="demo-home-nav__group">
          {group.list.map((item, index) => {
            return (
              <View
                key={item.title}
                className="demo-home-nav__block"
                data-url={'/pages' + item.path + '/index'}
                onClick={this.onClick}
              >
                {item.title}
                <Icon name="arrow" className="demo-home-nav__icon"></Icon>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}
