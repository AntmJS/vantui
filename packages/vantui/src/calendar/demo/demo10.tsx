/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Cell, Calendar } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [date, setDate] = react.useState<number[]>()
  // @ts-ignore
  const formatDates = react.useCallback((d) => {
    if (d && d.length) {
      let text: string[] = []
      d.forEach((item) => {
        const res = new Date(item)
        text.push(`${res.getMonth()}-${res.getDate()}`)
      })

      return text.join(` 至 `)
    }
  }, [])

  return (
    <View>
      <Cell
        title="日期区间最大范围"
        value={formatDates(date)}
        onClick={() => setShow(true)}
      />
      <Calendar
        maxRange={3}
        type="range"
        show={show}
        onClose={() => setShow(false)}
        onConfirm={(e) => {
          if (Array.isArray(e.detail.value)) {
            setDate(e.detail.value.map((date) => date?.valueOf()))
            setShow(false)
          }
        }}
      />
    </View>
  )
}
