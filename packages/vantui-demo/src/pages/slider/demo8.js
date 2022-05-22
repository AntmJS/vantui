/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Slider } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View style={{ height: '100px' }}>
      <Slider value="40" />
      <Slider value="20" vertical={true} />
    </View>
  )
}
