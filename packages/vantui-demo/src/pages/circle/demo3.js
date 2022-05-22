/* eslint-disable */
import react from 'react'
import { Circle, Button } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(50)

  return (
    <>
      <Circle value={value} color="#07c160" clockwise={false} text="逆时针" />
      <Button onClick={() => setValue(value + 10)}>增加</Button>
    </>
  )
}
