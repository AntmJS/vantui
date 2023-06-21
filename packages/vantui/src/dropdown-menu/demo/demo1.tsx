/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
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
      {
        text: '活动商品',
        value: 2,
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
      {
        text: '销量排序',
        value: 'c',
      },
    ],
    value1: 0,
    value2: 'a',
  })
  return (
    <View>
      <DropdownMenu>
        <DropdownItem value={state.value1} options={state.option1} />
        <DropdownItem value={state.value2} options={state.option2} />
      </DropdownMenu>
    </View>
  )
}
