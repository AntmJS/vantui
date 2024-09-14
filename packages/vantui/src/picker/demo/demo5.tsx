import { Picker, PickerProps } from '@antmjs/vantui'
import { useState } from 'react'

const columns = [
  {
    text: '杭州',
    id: 1,
    disabled: true,
  },
  {
    text: '宁波',
    id: 2,
  },
  {
    text: '温州',
    id: 3,
  },
]
export default function Demo() {
  const [value, setValue] = useState<PickerProps['value']>(3)

  return (
    <Picker
      idKey="id"
      mode="content"
      showToolbar
      title="请选择"
      value={value}
      columns={columns}
      onInput={(e) => {
        setValue(e.detail)
      }}
    />
  )
}
