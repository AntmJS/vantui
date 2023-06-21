/* eslint-disable */
import react from 'react'
import { DropdownMenu, DropdownItem } from '@antmjs/vantui'

export default function Demo() {
  const [state] = react.useState({
    option1: [
      {
        text: '全部商品',
        value: 0,
      },
      {
        text: '新款商品',
        value: 1,
      },
    ],
    option2: [
      {
        text: '默认排序',
        value: 'a',
      },
      {
        text: '好评排序',
        value: 'b',
      },
    ],
    value1: 0,
    value2: 'a',
  })
  return (
    <DropdownMenu activeColor="#1989fa">
      <DropdownItem value={state.value1} options={state.option1} />
      <DropdownItem value={state.value2} options={state.option2} />
    </DropdownMenu>
  )
}
