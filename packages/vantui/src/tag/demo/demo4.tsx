import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag mark={true} type="primary">
        标签
      </Tag>
      <Tag mark={true} type="success">
        标签
      </Tag>
      <Tag mark={true} type="danger">
        标签
      </Tag>
      <Tag mark={true} type="warning">
        标签
      </Tag>
    </View>
  )
}
