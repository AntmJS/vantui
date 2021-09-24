import { View, Button } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { useDidHide, useDidShow, navigateTo } from '@tarojs/taro'
import { Popup, Steps, Stepper } from '@antmjs/vantui'

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

  const [show, setShow] = useState(false)

  return (
    <View className="pages-index-index">
      <Button onClick={() => setShow(!show)}>点我</Button>
      <Stepper value={5} min={5} max={8} />
      <Steps
        active={2}
        steps={[
          {
            text: '步骤一',
            desc: '描述信息',
            inactiveIcon: 'location-o',
            activeIcon: 'success',
          },
          {
            text: '步骤二',
            desc: '描述信息',
            inactiveIcon: 'like-o',
            activeIcon: 'plus',
          },
          {
            text: '步骤三',
            desc: '描述信息',
            inactiveIcon: 'star-o',
            activeIcon: 'cross',
          },
          {
            text: '步骤四',
            desc: '描述信息',
            inactiveIcon: 'phone-o',
            activeIcon: 'fail',
          },
        ]}
      />
      <Popup show={show} position="bottom" onClose={() => setShow(false)}>
        <View>
          <View
            onClick={() => {
              navigateTo({ url: '/pages/index/index' })
            }}
          >
            不是设计开发不贷款分不开的
          </View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
          <View>不是设计开发不贷款分不开的</View>
        </View>
      </Popup>
    </View>
  )
}
