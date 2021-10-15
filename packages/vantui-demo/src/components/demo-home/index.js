import { Block, View, Image } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import list from '../../config.js'
/* eslint-disable react/prop-types */
import DemoHomeNav from '../demo-home-nav/index'
import './index.less'

export default class Index extends React.Component {
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
          <View className="demo-home__text">Vant Weapp</View>
        </View>
        <View className="demo-home__desc">轻量、可靠的小程序 UI 组件库</View>
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
