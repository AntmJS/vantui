/* eslint-disable */
import react from 'react'
import { Rate } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(3)

  return <Rate disabled value={value} onChange={(e) => setValue(e.detail)} />
}
