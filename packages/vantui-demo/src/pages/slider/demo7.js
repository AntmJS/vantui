/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Slider } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(50)
  return (
    <Slider
      value={value}
      onDrag={(e) => {
        console.info(e.detail)
        setValue(e.detail.value)
      }}
      renderButton={function D() {
        return <View class="customButton">{value}/100</View>
      }}
    />
  )
}
