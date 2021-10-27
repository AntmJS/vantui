import { Block, View } from '@tarojs/components'
import React from 'react'

import { Skeleton, Switch, Image } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    show: false,
  }

  onChange = ({ detail }) => {
    this.setState({ show: detail })
  }

  render() {
    const { show } = this.state
    return (
      <DemoPage title="Skeleton 骨架屏">
        <Block>
          <DemoBlock title="基础用法">
            <Skeleton
              title
              row="3"
              rowWidth={['100%', '100%', '80%']}
            ></Skeleton>
          </DemoBlock>
          <DemoBlock title="显示头像">
            <Skeleton title avatar row="3"></Skeleton>
          </DemoBlock>
          <DemoBlock title="展示子组件">
            <Switch
              checked={show}
              size="24px"
              onChange={this.onChange}
            ></Switch>
            <Skeleton title avatar row="3" loading={!show}>
              <View className="demo-preview">
                <Image
                  className="demo-preview-img"
                  src="https://img.yzcdn.cn/vant/logo.png"
                ></Image>
                <View className="demo-content">
                  <View className="demo-content-h3">关于 Vant Weapp</View>
                  <View className="domo-content-p">
                    Vant Weapp 是移动端 Vue 组件库 Vant
                    的小程序版本，两者基于相同的视觉规范，提供一致的 API
                    接口，助力开发者快速搭建小程序应用。
                  </View>
                </View>
              </View>
            </Skeleton>
          </DemoBlock>
        </Block>
      </DemoPage>
    )
  }
}
