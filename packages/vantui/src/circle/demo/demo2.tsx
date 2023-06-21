/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Circle, Button } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(50)
  return (
    <View>
      <Circle value={value} strokeWidth={6} text="宽度定制" />
      <Circle
        value={value}
        layerColor="#eeeeee"
        color="#ee0a24"
        text="颜色定制"
      />
      <Circle
        value={value}
        color={{
          '0%': '#ffd01e',
          '100%': '#ee0a24',
        }}
        text="渐变色"
      />
      <Circle value={value} size={120} text="大小定制" />

      <Button onClick={() => setValue(value + 10)}>增加</Button>
    </View>
  )
}
