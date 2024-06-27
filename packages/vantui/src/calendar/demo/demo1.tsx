/* eslint-disable */
import react, { useEffect } from 'react'
import { View } from '@tarojs/components'
import { Cell, Calendar } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  const [date, setDate] = react.useState<Date>()

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date(Date.now() - 1000 * 60 * 60 * 24 * 10))
    }, 3000)
  }, [])

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
        longspan
        show={show}
        maxDate={new Date('2050-12-12')}
        minDate={new Date('2015-12-12')}
        onClose={() => setShow(false)}
        onConfirm={(e) => {
          setDate(e.detail.value.valueOf() as Date)
          setShow(false)
        }}
      />
    </View>
  )
}
