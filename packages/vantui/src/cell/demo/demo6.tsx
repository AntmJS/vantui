/* eslint-disable */
import { View } from '@tarojs/components'
import { Cell } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Cell
        isLink
        title="单元格"
        linkType="navigateTo"
        url="/pages/dashboard/index"
      />
    </View>
  )
}
