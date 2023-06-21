/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Checkbox } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(true)
  return (
    <View style={{ display: 'flex' }}>
      <Checkbox disabled style={{ marginRight: '20px' }}>
        禁用1
      </Checkbox>
      <Checkbox
        labelDisabled
        value={value}
        onChange={(e) => setValue(e.detail)}
      >
        禁用2
      </Checkbox>
    </View>
  )
}
