/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Checkbox } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(true)
  const props = {
    value: value,
    onChange: (e) => setValue(e.detail),
  }

  return (
    <View>
      <Cell>
        <Checkbox {...props} shape="square">
          形状
        </Checkbox>
      </Cell>
      <Cell>
        <Checkbox {...props} checkedColor="#07c160">
          颜色
        </Checkbox>
      </Cell>
      <Cell>
        <Checkbox {...props} iconSize="25px">
          颜色
        </Checkbox>
      </Cell>
    </View>
  )
}
