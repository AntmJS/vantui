/* eslint-disable */
import react from 'react'
import { RadioGroup, Radio } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.detail)}>
      <Radio name="1" iconSize="24px" shape="square">
        单选框 1
      </Radio>
      <Radio name="2" iconSize="24px" shape="square">
        单选框 2
      </Radio>
    </RadioGroup>
  )
}
