/* eslint-disable */
import { View } from '@tarojs/components'
import { CellGroup, Cell } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <CellGroup inset>
        <Cell title="单元格" value="内容" />
        <Cell title="单元格" value="内容" label="描述信息" />
      </CellGroup>
    </View>
  )
}
