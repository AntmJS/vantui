/* eslint-disable */
import react from 'react'
import { Sticky, Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Sticky offsetTop={50}>
      <Button type="primary">吸顶距离</Button>
    </Sticky>
  )
}
