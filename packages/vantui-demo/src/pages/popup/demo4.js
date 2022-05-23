/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Popup } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="圆角弹窗" isLink onClick={() => setShow(true)} />
      <Popup round show={show} onClose={() => setShow(false)}>
        内容
      </Popup>
    </View>
  )
}
