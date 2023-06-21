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
        title="自定义弹出位置"
        value={formatDate(date)}
        onClick={() => setShow(true)}
      />
      <Calendar
        round={false}
        position="right"
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
