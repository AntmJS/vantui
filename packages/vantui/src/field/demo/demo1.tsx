/* eslint-disable */
import react from 'react'
import { CellGroup, Field } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState()

  return (
    <CellGroup>
      <Field
        value={value}
        placeholder="请输入用户名"
        border={false}
        onChange={(e) => setValue(e.detail)}
      />
    </CellGroup>
  )
}
