/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Popup, PopupProps } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [position, setPosition] = react.useState<PopupProps['position']>('top')

  const showAction = function (position) {
    setPosition(position)
    setShow(true)
  }

  return (
    <View>
      <Cell title="顶部弹出" isLink onClick={() => showAction('top')} />
      <Cell title="底部弹出" isLink onClick={() => showAction('bottom')} />
      <Cell title="左侧弹出" isLink onClick={() => showAction('left')} />
      <Cell title="右侧弹出" isLink onClick={() => showAction('right')} />
      <Popup show={show} position={position} onClose={() => setShow(false)}>
        内容{position}
      </Popup>
    </View>
  )
}
