/* eslint-disable */
import react from 'react'
import { Switch } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(false)
  return (
    <Switch size="32px" checked={value} onChange={(e) => setValue(e.detail)} />
  )
}
