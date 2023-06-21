/* eslint-disable */
import { View } from '@tarojs/components'
import { Cell } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Cell title="单元格" isLink />
      <Cell title="单元格" isLink value="内容" />
      <Cell title="单元格" isLink value="内容" arrowDirection="down" />
    </View>
  )
}
