import { View } from '@tarojs/components'
import { Empty } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      {/*  通用错误  */}
      <Empty image="error" description="描述文字" />
      {/*  网络错误  */}
      <Empty image="network" description="描述文字" />
      {/*  搜索提示  */}
      <Empty image="search" description="描述文字" />
    </View>
  )
}
