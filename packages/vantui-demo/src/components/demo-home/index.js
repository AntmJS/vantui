import { View, Image } from '@tarojs/components'
import { Component } from 'react'

import list from '../../config'
/* eslint-disable react/prop-types */
import DemoHomeNav from '../demo-home-nav/index'
import './index.less'

export default class Index extends Component {
  state = {
    list,
  }
  render() {
    const { list } = this.state
    return (
      <View className="demo-home">
        <View className="demo-home__title">
          <Image
            mode="aspectFit"
            className="demo-home__image"
            src="https://img.yzcdn.cn/vant/logo.png"
          ></Image>
          <View className="demo-home__text">@antmjs/vantui</View>
        </View>
        <View className="demo-home__desc">
          Taro-React H5-React通用的UI 组件库
        </View>
        <View className="demo-home__desc">
          已支持通过Taro-React编译的微信小程序、支付宝小程序、H5
          已支持在纯H5-React应用内使用
        </View>
        {list.map((group, index) => {
          return (
            <View key={index}>
              <DemoHomeNav group={group}></DemoHomeNav>
            </View>
          )
        })}
      </View>
    )
  }
}
