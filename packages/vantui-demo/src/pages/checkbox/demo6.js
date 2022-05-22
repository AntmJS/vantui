/* eslint-disable */
import react from 'react'
import { CheckboxGroup, Checkbox } from '@antmjs/vantui'

export default function Demo() {
  const [values, setValues] = react.useState(['a'])
  return (
    <CheckboxGroup
      direction="horizontal"
      value={values}
      max={2}
      onChange={(e) => {
        setValues([...e.detail])
      }}
    >
      <Checkbox name="a">复选框 a</Checkbox>
      <Checkbox name="b">复选框 b</Checkbox>
      <Checkbox name="c">复选框 c</Checkbox>
    </CheckboxGroup>
  )
}
