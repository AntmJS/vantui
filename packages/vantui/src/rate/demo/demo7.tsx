/* eslint-disable */
import react from 'react'
import { Rate } from '@antmjs/vantui'

export default function Demo() {
  const [value] = react.useState(3)

  return <Rate readonly value={value} />
}
