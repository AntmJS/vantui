/* eslint-disable */
import react from 'react'
import { Rate } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(4)

  return (
    <Rate
      value={value}
      icon="like"
      voidIcon="likeO"
      onChange={(e) => setValue(e.detail)}
    />
  )
}
