/* eslint-disable */
import react from 'react'
import { Checkbox } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(true)
  return (
    <Checkbox value={value} onChange={(e) => setValue(e.detail)}>
      复选框
    </Checkbox>
  )
}
