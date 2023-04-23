import { View, Image } from '@tarojs/components'
import { Component } from 'react'

import list from '../../config.json'
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
            src="https://antm-js.gitee.io/resource/antmjs-vantui.jpg"
          ></Image>
          <View className="demo-home__text">@antmjs/vantui</View>
        </View>
        <View className="demo-home__desc">
          Taro-React H5-React通用的UI 组件库
        </View>
        <View className="demo-home__desc">
          <View>已支持通过Taro编译的小程序、H5</View>
          <View>已支持React应用</View>
        </View>
        {(list || []).map((group, index) => {
          if (!['开发指南', '有赞Vant-Weapp小程序文档'].includes(group.name)) {
            return (
              <View key={index}>
                <DemoHomeNav group={group}></DemoHomeNav>
              </View>
            )
          } else return ''
        })}
      </View>
    )
  }
}
