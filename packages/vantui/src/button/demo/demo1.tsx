/* eslint-disable */
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  // 点击事件返回Promise，即可让按钮自带loading状态
  const handle = async () => {
    await timeout()
  }

  return (
    <View>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="info">信息按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>
      <View></View>
      <Button type="info" onClick={handle} loadingText="提交中...">
        确认提交
      </Button>
      <Button
        type="primary"
        onClick={handle}
        loadingMode="toast"
        loadingText="提交中..."
        loadingType="spinner"
      >
        确认提交
      </Button>
    </View>
  )
}

function timeout() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 3000)
  })
}
