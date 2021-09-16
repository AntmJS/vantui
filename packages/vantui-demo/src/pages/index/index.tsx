import { View, Button } from '@tarojs/components'
import { useEffect, useCallback } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import {
  Progress,
  Sticky,
  Icon,
  NavBar,
  Image,
  Row,
  Col,
  Loading,
  Picker,
} from '@antmjs/vantui'

import './index.less'

const columns = ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州']

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

  const onChange = useCallback(function (a) {
    console.info(a)
  }, [])

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
      <Icon name="chat" size={56} dot info={null} />
      <Icon name="chat" size={56} info="9" />
      <Icon name="chat" size={56} info="99+" />
      <View
        id="container"
        style={{ marginTop: '200px', height: '200px', background: 'red' }}
      >
        <Sticky
          container={() => Taro.createSelectorQuery().select('#container')}
        >
          <Button>kkk</Button>
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

      <Picker title="标题" columns={columns} onChange={onChange} />
    </View>
  )
}
