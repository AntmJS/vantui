/* eslint-disable */
import react from 'react'
import { Switch } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState(false)
  return <Switch checked={value} onChange={(e) => setValue(e.detail)} />
}
