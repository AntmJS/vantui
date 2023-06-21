import { View } from '@tarojs/components'
import { Slider } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View style={{ height: '200px' }}>
      <Slider value={40} />
      <Slider value={60} vertical={true} />
    </View>
  )
}
