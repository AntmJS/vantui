/* eslint-disable */
import react from 'react'
import { DatetimePicker } from '@antmjs/vantui'

export default function Demo() {
  const [state, setState] = react.useState({
    minDate: new Date(2018, 0, 1).getTime(),
    currentDate: '2020-12-12 09:09:12',
  })

  const onInput = react.useCallback(
    function (event) {
      setState({
        ...state,
        currentDate: event.detail.value,
      })
    },
    [state],
  )

  return (
    <DatetimePicker
      mode="content"
      type="datetime"
      value={state.currentDate}
      minDate={state.minDate}
      onInput={onInput}
    />
  )
}
