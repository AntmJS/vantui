/* eslint-disable */
import react from 'react'
import { DatetimePicker } from '@antmjs/vantui'

export default function Demo() {
  const [state, setState] = react.useState({
    currentDate: new Date(2018, 0, 1),
    minDate: new Date(2018, 0, 1).getTime(),
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

  return (
    <DatetimePicker
      type="year-month"
      value={state.currentDate}
      minDate={state.minDate}
      onInput={onInput}
    />
  )
}
