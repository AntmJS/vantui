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
        setValue(e.detail.value)
      }}
      onChange={(e) => {
        setValue(e.detail)
      }}
      renderButton={<View className="customButton">{value}/100</View>}
    />
  )
}
