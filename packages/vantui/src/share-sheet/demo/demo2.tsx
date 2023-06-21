/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, ShareSheet, Toast } from '@antmjs/vantui'

const options = [
  [
    {
      name: '微信',
      icon: 'wechat',
    },
    {
      name: '微博',
      icon: 'weibo',
    },
    {
      name: 'QQ',
      icon: 'qq',
    },
  ],
  [
    {
      name: '复制链接',
      icon: 'link',
    },
    {
      name: '分享海报',
      icon: 'poster',
    },
    {
      name: '二维码',
      icon: 'qrcode',
    },
  ],
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
