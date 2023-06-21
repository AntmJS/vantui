/* eslint-disable */
import react from 'react'
import { CountDown } from '@antmjs/vantui'

export default function Demo() {
  const [value] = react.useState(30 * 60 * 60 * 1000)

  return <CountDown millisecond time={value} format="HH:mm:ss:SSS" />
}
