/* eslint-disable */
import react from 'react'
import { DatetimePicker } from '@antmjs/vantui'

export default function Demo() {
  const [state, setState] = react.useState({
    minDate: new Date(2018, 0, 1).getTime(),
    currentDate: undefined,
  })

  const onInput = react.useCallback(
    function (event) {
      setState({
        ...state,
        currentDate: event.detail,
      })
    },
    [state],
  )

  const formatter = react.useCallback(function (type, value) {
    if (type === 'year') {
      return `${value}年`
    }

    if (type === 'month') {
      return `${value}月`
    }

    return value
  }, [])

  return (
    <DatetimePicker
      type="date"
      value={state.currentDate}
      minDate={state.minDate}
      onInput={onInput}
      formatter={formatter}
    />
  )
}
