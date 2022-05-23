/* eslint-disable */
import react from 'react'
import { Rate } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(4)

  return (
    <Rate
      value={value}
      size={25}
      color="#ffd21e"
      voidIcon="star"
      voidColor="#eee"
      onChange={(e) => setValue(e.detail)}
    />
  )
}
