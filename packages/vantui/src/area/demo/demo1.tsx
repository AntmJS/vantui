import { Area } from '@antmjs/vantui'

export default function Demo() {
  const areaList = {
    province_list: {
      110000: '北京市',
      120000: '天津市',
    },
    city_list: {
      110100: '北京市',
      120100: '天津市',
    },
    county_list: {
      110101: '东城区',
      110102: '西城区',
    },
  }
  return (
    <Area
      mode="content"
      value={['110000', '110100', '110102']}
      areaList={areaList}
    />
  )
}
