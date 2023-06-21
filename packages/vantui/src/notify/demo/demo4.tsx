import { View } from '@tarojs/components'
import { Button, Notify } from '@antmjs/vantui'

export default function Demo() {
  const show = () => {
    Notify.show({
      message: '自定义节点选择器',
      duration: 1000,
      selector: '#customSelector',
    })
  }

  return (
    <View>
      <Button onClick={show} type="primary">
        自定义选择器
      </Button>
      <Notify id="customSelector" />
    </View>
  )
}
