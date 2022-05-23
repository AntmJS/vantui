/* eslint-disable */
import react from 'react'
import { CountDown } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(30 * 60 * 60 * 1000)

  return <CountDown time={value} />
}
