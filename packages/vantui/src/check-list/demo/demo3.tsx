import { useCallback, useEffect, useState } from 'react'
import { CheckList, CheckListProps, Button } from '@antmjs/vantui'
import { options } from './options'

export default function Demo() {
  const [value, setValue] = useState<CheckListProps['value']>([])

  useEffect(() => {
    setValue(['932450939976175616', '932810054606942208'])
  }, [])

  const onChange: CheckListProps['onChange'] = (e) => {
    setValue(e.detail)
  }

  const renderShow: CheckListProps['renderShow'] = useCallback(
    (data, setShow) => {
      return (
        <Button type="primary" block onClick={setShow}>
          {data.length ? `已经选择了${data.length}家公司` : '请选择'}
        </Button>
      )
    },
    [],
  )

  return (
    <CheckList
      value={value}
      onChange={onChange}
      limit={5}
      labelName="label"
      data={options}
      renderShow={renderShow}
    />
  )
}
