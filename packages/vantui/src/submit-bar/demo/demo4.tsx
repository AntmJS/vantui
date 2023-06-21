import { View, Text } from '@tarojs/components'
import { SubmitBar, Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <SubmitBar
      price={3050}
      buttonText="提交订单"
      tip={'asdasdsad'}
      renderTip={
        <View>
          您的收货地址不支持同城送,
          <Text>修改地址</Text>
        </View>
      }
    >
      <Tag type="primary">标签</Tag>
    </SubmitBar>
  )
}
