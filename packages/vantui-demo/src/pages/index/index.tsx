import { View, Button } from '@tarojs/components'
import { useEffect } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import { Progress, Sticky, Icon, NavBar } from '@antmjs/vantui'

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
    </View>
  )
}
