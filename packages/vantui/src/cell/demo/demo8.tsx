/* eslint-disable */
import { View } from '@tarojs/components'
import { Cell, Tag, Icon } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Cell
        value="内容"
        icon="shop-o"
        isLink
        renderTitle={
          <View>
            <View className="title">单元格</View>
            <Tag type="danger">标签</Tag>
          </View>
        }
      />
      <Cell
        title="单元格"
        border={false}
        renderRightIcon={<Icon name="search"></Icon>}
      />
    </View>
  )
}
