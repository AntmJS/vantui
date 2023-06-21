import { View } from '@tarojs/components'
import { createSelectorQuery } from '@tarojs/taro'
import { Sticky, Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View id="stick-in-view" style="height: 150px;background:#fff;">
      <Sticky container={() => createSelectorQuery().select(`#stick-in-view`)}>
        <Button type="primary" style="margin-left: 250px">
          吸顶距离
        </Button>
      </Sticky>
    </View>
  )
}
