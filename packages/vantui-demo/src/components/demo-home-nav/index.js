/* eslint-disable react/prop-types */
import { View } from '@tarojs/components'
import { Component } from 'react'
import { getCurrentPages, redirectTo, navigateTo } from '@tarojs/taro'

import { Icon } from '@antmjs/vantui'
import './index.less'

export default class Index extends Component {
  onClick = (event) => {
    const { url } = event.target.dataset
    if (getCurrentPages().length > 9) {
      redirectTo({ url: `${url}` })
    } else {
      navigateTo({ url: `${url}` })
    }
  }

  render() {
    const { group } = this.props

    return (
      <View className="demo-home-nav">
        <View className="demo-home-nav__title">
          {group.name || group.title}
        </View>
        <View className="demo-home-nav__group">
          {group.items.map((item) => {
            return (
              <View
                key={item.title}
                className="demo-home-nav__block"
                data-url={'/pages/' + item.path + '/index'}
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
