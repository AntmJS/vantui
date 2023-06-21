/* eslint-disable */
import { View } from '@tarojs/components'
import { Cell } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Cell center={true} title="单元格" value="内容" label="描述信息" />
    </View>
  )
}
