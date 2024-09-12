import { useEffect, useState } from 'react'
import { CheckList, CheckListProps } from '@antmjs/vantui'
import { options } from './options'

export default function Demo() {
  const [value, setValue] = useState<CheckListProps['value']>([])

  useEffect(() => {
    setValue(['932450939976175616'])
  }, [])

  const onChange: CheckListProps['onChange'] = (e) => {
    setValue(e.detail)
  }

  return (
    <CheckList
      value={value}
      onChange={onChange}
      limit={3}
      labelName="label"
      data={options}
    />
  )
}
