import { Block, View, Text } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'

import { Row, Loading, Image, Col } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    fits: [
      'contain',
      'cover',
      'fill',
      'none',
      'scale-down',
      'widthFix',
      'heightFix',
    ],
    src: 'https://img.yzcdn.cn/vant/cat.jpeg',
  }

  render() {
    const { src, fits } = this.state
    return (
      <DemoPage title="Image 图片">
        <Block>
          <DemoBlock title="基础用法" padding>
            <Row>
              <Image width="100" height="100" src={src}></Image>
            </Row>
          </DemoBlock>
          <DemoBlock title="填充模式" padding>
            <Row gutter="20">
              {fits.map((fit, index) => {
                return (
                  <Col key={fit.fit} span="8">
                    <Image
                      fit={fit}
                      width="100%"
                      height="27vw"
                      src={src}
                    ></Image>
                    <View className="text">{fit}</View>
                  </Col>
                )
              })}
            </Row>
          </DemoBlock>
          <DemoBlock title="圆形图片" padding>
            <Row gutter="20">
              {fits.map((fit, index) => {
                return (
                  <Col key={fit.fit} span="8">
                    <Image
                      round
                      fit={fit}
                      width="100%"
                      height="27vw"
                      src={src}
                    ></Image>
                    <View className="text">{fit}</View>
                  </Col>
                )
              })}
            </Row>
          </DemoBlock>
          <DemoBlock title="加载中提示" padding>
            <Row gutter="20">
              <Col span="8">
                <Image width="100%" height="27vw"></Image>
                <View className="text">默认提示</View>
              </Col>
              <Col span="8">
                <Image
                  width="100%"
                  height="27vw"
                  renderLoading={
                    <Block>
                      <Loading type="spinner" size="20" vertical></Loading>
                    </Block>
                  }
                ></Image>
                <View className="text">自定义提示</View>
              </Col>
            </Row>
          </DemoBlock>
          <DemoBlock title="加载失败提示" padding>
            <Row gutter="20">
              <Col span="8">
                <Image width="100%" height="27vw" src="x"></Image>
                <View className="text">默认提示</View>
              </Col>
              <Col span="8">
                <Image
                  width="100%"
                  height="27vw"
                  src="x"
                  renderError={
                    <Block>
                      <Text>加载失败</Text>
                    </Block>
                  }
                ></Image>
                <View className="text">自定义提示</View>
              </Col>
            </Row>
          </DemoBlock>
        </Block>
      </DemoPage>
    )
  }
}
