/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
    </View>
  )
}
