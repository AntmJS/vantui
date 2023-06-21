/* eslint-disable */
import { View } from '@tarojs/components'
import { Divider } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Divider contentPosition="center" textColor="#1989fa">
        文本颜色
      </Divider>
      <Divider contentPosition="center" borderColor="#1989fa">
        border 颜色
      </Divider>
      <Divider contentPosition="center" fontSize="18">
        字体大小
      </Divider>
    </View>
  )
}
