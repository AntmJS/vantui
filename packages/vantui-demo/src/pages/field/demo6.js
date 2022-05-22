/* eslint-disable */
import react from 'react'
import { CellGroup, Field } from '@antmjs/vantui'

export default function Demo() {
  return (
    <CellGroup>
      <Field
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        autosize
        border={false}
      />
    </CellGroup>
  )
}
