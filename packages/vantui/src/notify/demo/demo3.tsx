import { View } from '@tarojs/components'
import { Button, Notify } from '@antmjs/vantui'

export default function Demo() {
  const show = () => {
    Notify.show({
      message: '自定义颜色',
      color: '#ad0000',
      background: '#ffe1e1',
      duration: 10000,
    })
  }

  return (
    <View>
      <Button onClick={show} type="primary">
        自定义颜色和时长
      </Button>
      <Notify id="vanNotify" />
    </View>
  )
}
