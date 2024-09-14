import { Picker, PickerProps } from '@antmjs/vantui'
import { useState } from 'react'
import { data } from './data'

export default function Demo() {
  const [value, setValue] = useState<PickerProps['value']>(22)
  return (
    <Picker
      value={value}
      onInput={(e) => {
        console.info(e.detail, '~~~~~~~~~')
        setValue(e.detail)
      }}
      mode="content"
      idKey="id"
      valueKey="text"
      columns={data}
    />
  )
}
