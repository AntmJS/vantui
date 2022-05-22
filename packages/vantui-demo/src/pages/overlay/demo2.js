/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Button, Overlay } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Button type="primary" onClick={() => setShow(true)}>
        嵌入内容
      </Button>
      <Overlay show={show} onClick={() => setShow(false)}>
        <View class="wrapper">
          <View class="block" />
        </View>
      </Overlay>
    </View>
  )
}
