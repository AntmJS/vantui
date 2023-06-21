/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Calendar } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [date, setDate] = react.useState<number>(Date.now())

  const formatDate = react.useCallback((d) => {
    const res = new Date(d)
    return d
      ? `${res.getFullYear()}-${res.getMonth() + 1}-${res.getDate()}`
      : ''
  }, [])

  return (
    <View>
      <Cell
        title="选择单个日期"
        value={formatDate(date)}
        onClick={() => setShow(true)}
      />
      <Calendar
        showConfirm={false}
        show={show}
        onClose={() => setShow(false)}
        onConfirm={(e) => {
          if (!Array.isArray(e.detail.value)) {
            setDate(e.detail.value.valueOf())
            setShow(false)
          }
        }}
      />
    </View>
  )
}
