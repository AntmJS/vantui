/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Popup } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)

  return (
    <View className="van-root-popup">
      <Cell title="挂载到页面根节点" isLink onClick={() => setShow(true)} />
      <Popup rootPortal show={show} onClose={() => setShow(false)}>
        <View className="van-root-popup-content">
          <View>内容</View>
        </View>
      </Popup>
    </View>
  )
}
