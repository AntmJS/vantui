/* eslint-disable */
import react from 'react'
import { CountDown } from '@antmjs/vantui'

export default function Demo() {
  const [value] = react.useState(30 * 60 * 60 * 1000)

  return <CountDown time={value} format="DD 天 HH 时 mm 分 ss 秒" />
}
