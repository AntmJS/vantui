/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Popup } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="展示弹出层" isLink onClick={() => setShow(true)} />
      <Popup show={show} onClose={() => setShow(false)}>
        内容
      </Popup>
    </View>
  )
}
