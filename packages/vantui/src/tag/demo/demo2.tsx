import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag plain={true} type="primary">
        标签
      </Tag>
      <Tag plain={true} type="success">
        标签
      </Tag>
      <Tag plain={true} type="danger">
        标签
      </Tag>
      <Tag plain={true} type="warning">
        标签
      </Tag>
    </View>
  )
}
