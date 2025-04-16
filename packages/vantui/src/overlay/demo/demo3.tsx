/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Button, Overlay } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Button type="primary" onClick={() => setShow(true)}>
        挂载到页面根结点
      </Button>
      <Overlay show={show} rootPortal onClick={() => setShow(false)}>
        <View className="van-root-wrapper">
          <View className="van-root-block" />
        </View>
      </Overlay>
    </View>
  )
}
