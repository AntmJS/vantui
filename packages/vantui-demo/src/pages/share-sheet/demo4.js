/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, ShareSheet } from '@antmjs/vantui'

const options = [
  {
    name: '微信',
    icon: 'wechat',
  },
  {
    name: '微博',
    icon: 'weibo',
  },
]
export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Cell title="显示分享面板" onClick={() => setShow(true)} />
      <ShareSheet
        show={show}
        description="描述信息......"
        title="立即分享给好友"
        options={options}
        onClose={() => setShow(false)}
      />
    </View>
  )
}
