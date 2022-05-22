/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Calendar } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [date, setDate] = react.useState()

  return (
    <View>
      <Cell
        title="选择多个日期"
        value={`${date ? `选择了${date.length}个日期` : ''}`}
        onClick={() => setShow(true)}
      />
      <Calendar
        show={show}
        type="multiple"
        onClose={() => setShow(false)}
        onConfirm={(e) => {
          setDate(e.detail.value.map((date) => date?.valueOf()))
          setShow(false)
        }}
      />
    </View>
  )
}
