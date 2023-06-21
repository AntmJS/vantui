/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { ActionSheet, Button } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)

  return (
    <>
      <ActionSheet show={show} title="标题" onClose={() => setShow(false)}>
        <View>内容</View>
      </ActionSheet>
      <Button type="primary" onClick={() => setShow(true)}>
        弹出菜单
      </Button>
    </>
  )
}
