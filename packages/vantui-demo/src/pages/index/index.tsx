import { View } from '@tarojs/components'
import { useEffect } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import {
  Progress,
  Sticky,
  Icon,
  NavBar,
  Button,
  Tabs,
  Tab,
  Image,
  Row,
  Col,
  Loading,
} from '@antmjs/vantui'

import './index.less'

export default function Index() {
  useEffect(function () {
    console.info('index page load.')
    return function () {
      console.info('index page unload.')
    }
  }, [])
  useDidShow(function () {
    console.info('index page show.')
  })
  useDidHide(function () {
    console.info('index page hide.')
  })

  return (
    <View className="pages-index-index">
      <NavBar
        fixed
        border
        title="标题"
        leftText="返回"
        rightText="按钮"
        leftArrow
      />
      <Progress percentage={50} strokeWidth={4} />
      <Icon name="chat" size={40} dot info={null} />
      <Icon name="chat" size={40} info="9" />
      <Icon name="chat" size={40} info="99+" />
      <Tabs active={0} swipeable swipe-threshold={5}>
        <Tab info={null} title="标签 1">
          内容 1
        </Tab>
        <Tab info={null} title="标签 2">
          内容 2
        </Tab>
        <Tab info={null} title="标签 3">
          内容 3
        </Tab>
        <Tab info={null} title="标签 4">
          内容 4
        </Tab>
        <Tab info={null} title="标签 1">
          内容 1
        </Tab>
        <Tab info={null} title="标签 2">
          内容 2
        </Tab>
        <Tab info={null} title="标签 3" disabled>
          内容 3
        </Tab>
        <Tab info={null} title="标签 4">
          内容 4
        </Tab>
      </Tabs>

      {/* <Tabs active={0}>
        <Tab info={null} title="标签 11">
          内容 11
        </Tab>
        <Tab info={null} title="标签 22">
          内容 22
        </Tab>
        <Tab info={null} title="标签 33">
          内容 33
        </Tab>
        <Tab info={null} title="标签 44">
          内容 44
        </Tab>
      </Tabs> */}
      <View
        id="container"
        style={{ marginTop: '200px', height: '200px', background: 'red' }}
      >
        <Sticky
          container={() => Taro.createSelectorQuery().select('#container')}
        >
          <Button plain type="primary">
            kkk
          </Button>
        </Sticky>
      </View>
      <Image
        width={300}
        height={300}
        lazyLoad={true}
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <Image
        width={300}
        height={300}
        fit="contain"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <Row>
        <Col span="8">span: 8</Col>
        <Col span="8">span: 8</Col>
        <Col span="8">span: 8</Col>
      </Row>

      <Loading type="circular" size={80}>
        加载中...
      </Loading>
    </View>
  )
}
