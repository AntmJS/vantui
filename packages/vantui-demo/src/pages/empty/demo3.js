/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Empty } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Empty
        class="customImage"
        image="https://img.yzcdn.cn/vant/custom-empty-image.png"
        description="描述文字"
      />
    </View>
  )
}
