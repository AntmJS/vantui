/* eslint-disable */
import react from 'react'
import { CheckboxGroup, CellGroup, Cell, Checkbox } from '@antmjs/vantui'

const list = ['aa', 'bb', 'cc']
export default function Demo() {
  const [values, setValues] = react.useState(['bb'])

  const cellClick = (item) => {
    if (values.includes(item)) {
      values.splice(values.indexOf(item), 1)
    } else values.push(item)
    setValues([...values])
  }

  return (
    <CheckboxGroup value={values}>
      <CellGroup>
        {list.map((item) => {
          return (
            <Cell
              key={item}
              title={'复选框 ' + item}
              clickable
              onClick={() => cellClick(item)}
            >
              <Checkbox style={{ justifyContent: 'flex-end' }} name={item} />
            </Cell>
          )
        })}
      </CellGroup>
    </CheckboxGroup>
  )
}
