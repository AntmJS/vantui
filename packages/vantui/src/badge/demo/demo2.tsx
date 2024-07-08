/* eslint-disable */
import { Badge } from '@antmjs/vantui'
import { View } from '@tarojs/components'

export default function Demo() {
  return (
    <>
      <Badge content="带边框～" bordered>
        <View className="avart"></View>
      </Badge>
    </>
  )
}
