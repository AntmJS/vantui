import { View } from '@tarojs/components'
import { Tabs, Tab, Toast } from '@antmjs/vantui'

export default function Demo() {
  const onClick = (e) => {
    Toast.show({
      message: e.detail.title,
      selector: '#tab-demo6',
    })
  }

  return (
    <View>
      <Tabs onClick={onClick}>
        <Tab title="标签 1">内容 1</Tab>
        <Tab title="标签 2">内容 2</Tab>
      </Tabs>
      <Toast id="tab-demo6" />
    </View>
  )
}
