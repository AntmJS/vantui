/* eslint-disable */
import { Area } from '@antmjs/vantui'

import { areaList } from '@vant/area-data'

export default function Demo() {
  return (
    <Area
      areaList={areaList}
      columnsPlaceholder={['请选择', '请选择', '请选择']}
      title="标题"
    />
  )
}
