/* eslint-disable */
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Button color="#7232dd">单色按钮</Button>
      <Button color="#7232dd" plain>
        单色按钮
      </Button>
      <Button color="linear-gradient(to right, #4bb0ff, #6149f6)">
        渐变色按钮
      </Button>
    </View>
  )
}
