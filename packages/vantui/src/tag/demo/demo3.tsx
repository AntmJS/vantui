import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag round={true} type="primary">
        标签
      </Tag>
      <Tag round={true} type="success">
        标签
      </Tag>
      <Tag round={true} type="danger">
        标签
      </Tag>
      <Tag round={true} type="warning">
        标签
      </Tag>
    </View>
  )
}
