/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, ShareSheet, Toast } from '@antmjs/vantui'

const options = [
  {
    name: 'URL图标1',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
  },
  {
    name: 'URL图标2',
    icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
  },
]
export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="显示分享面板" onClick={() => setShow(true)} />
      <ShareSheet
        show={show}
        title="立即分享给好友"
        options={options}
        onSelect={(e) => Toast.show(e.detail.name)}
        onClose={() => setShow(false)}
      />
      <Toast />
    </View>
  )
}
