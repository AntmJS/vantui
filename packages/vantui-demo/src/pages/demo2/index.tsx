import { View, Button } from '@tarojs/components'
import { useEffect, useState } from 'react'
import { useDidHide, useDidShow } from '@tarojs/taro'
import { Popup } from '@antmjs/vantui'

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
      <Popup show={show} position="bottom">
        <View>
          <View>不是设计开发不贷款分不开的</View>
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
