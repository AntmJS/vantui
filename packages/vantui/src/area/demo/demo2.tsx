import react from 'react'
import { areaList } from '@vant/area-data'
import { Area } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState('')
  react.useEffect(() => {
    setTimeout(() => {
      setValue('210793')
    }, 1000)
  }, [])

  return (
    <Area
      columnsPlaceholder={['请选择', '请选择', '请选择']}
      mode="content"
      areaList={areaList}
      value={value}
    />
  )
}
