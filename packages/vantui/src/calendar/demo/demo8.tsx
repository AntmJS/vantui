/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Calendar } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [date, setDate] = react.useState<number>()

  const formatDate = react.useCallback((d) => {
    const res = new Date(d)
    return d
      ? `${res.getFullYear()}-${res.getMonth() + 1}-${res.getDate()}`
      : ''
  }, [])

  return (
    <View>
      <Cell
        title="自定义日期文案"
        value={formatDate(date)}
        onClick={() => setShow(true)}
      />
      <Calendar
        show={show}
        onClose={() => setShow(false)}
        onConfirm={(e) => {
          if (!Array.isArray(e.detail.value)) {
            setDate(e.detail.value.valueOf())
            setShow(false)
          }
        }}
        formatter={(day) => {
          const month = day.date.getMonth() + 1
          const date = day.date.getDate()

          if (month === 5) {
            if (date === 1) {
              day.topInfo = <View style={{ color: 'green' }}>劳动节</View>
            } else if (date === 4) {
              day.topInfo = '54青年节'
            } else if (date === 11) {
              day.text = '今天'
            }
          }

          return day
        }}
      />
    </View>
  )
}
