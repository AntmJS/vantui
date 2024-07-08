/* eslint-disable */
import { Badge } from '@antmjs/vantui'
import { View } from '@tarojs/components'

export default function Demo() {
  return (
    <>
      <Badge content="8">
        <View className="avart"></View>
      </Badge>
      <Badge content="好消息!" wrapperStyle={{ paddingLeft: 30 }}>
        <View className="avart"></View>
      </Badge>
      <Badge content="" wrapperStyle={{ paddingLeft: 30 }}>
        <View className="avart"></View>
      </Badge>
    </>
  )
}
