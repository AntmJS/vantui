/* eslint-disable */
import react from 'react'
import { DatetimePicker } from '@antmjs/vantui'

export default function Demo() {
  const [state, setState] = react.useState({
    minHour: 10,
    maxHour: 20,
    minDate: new Date(2009, 10, 1).getTime(),
    maxDate: new Date(2011, 10, 1).getTime(),
    currentDate: new Date().getTime(),
  })

  const onInput = react.useCallback(
    function (event) {
      setState({
        currentDate: event.detail,
      })
    },
    [state],
  )

  return (
    <DatetimePicker
      type="datetime"
      value={state.currentDate}
      minDate={state.minDate}
      maxDate={state.maxDate}
      onInput={onInput}
    />
  )
}
