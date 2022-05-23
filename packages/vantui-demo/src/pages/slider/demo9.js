import react from 'react'
import { View } from '@tarojs/components'
import { Slider } from '@antmjs/vantui'
export default function Demo() {
  return (
    <View>
      <View style="height: 150px;">
        <Slider value="50" vertical={true} onChange={this.onChange} />
        <Slider
          value={[10, 50]}
          range={true}
          vertical={true}
          style="marginLeft: 100px;"
          onChange={this.onChange}
        />
      </View>
    </View>
  )
}
