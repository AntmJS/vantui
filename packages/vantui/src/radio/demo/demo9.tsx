/* eslint-disable */
import react from 'react'
import { RadioGroup, CellGroup, Cell, Radio } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState('1')
  return (
    <RadioGroup value={value}>
      <CellGroup>
        <Cell
          title="单选框 1"
          clickable
          onClick={() => setValue('1')}
          renderRightIcon={<Radio name="1"></Radio>}
        ></Cell>
        <Cell
          title="单选框 2"
          clickable
          onClick={() => setValue('2')}
          renderRightIcon={<Radio name="2"></Radio>}
        ></Cell>
      </CellGroup>
    </RadioGroup>
  )
}
