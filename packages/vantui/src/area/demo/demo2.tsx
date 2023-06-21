/* eslint-disable */
import react from 'react'
import { Area } from '@antmjs/vantui'

import { areaList } from '@vant/area-data'
export default function Demo() {
  const [value, setValue] = react.useState('')
  react.useEffect(() => {
    setTimeout(() => {
      setValue('210793')
    }, 2000)
  }, [])

  return <Area areaList={areaList} value={value} />
}
