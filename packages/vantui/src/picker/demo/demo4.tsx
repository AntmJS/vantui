/* eslint-disable */
import { Picker, PickerProps } from '@antmjs/vantui'
import { citiesWithDistricts } from './options'
import { useState } from 'react'

export default function Demo() {
  const [value, setValue] = useState<PickerProps['value']>([
    '福建',
    '莆田',
    '城厢区',
  ])

  const syncColumns: PickerProps['syncColumns'] = ({
    values,
    columns,
    changeIndex,
  }) => {
    let dataNew: any[] = [...columns]
    const provinces = Object.keys(citiesWithDistricts) || columns[0] || []
    const provincesValue = values[0] || provinces[0]

    return new Promise((resolve) => {
      // 实际场景根据changeIndex请求
      console.info(changeIndex, values)
      setTimeout(() => {
        dataNew[0] = provinces
        dataNew[1] = Object.keys(
          citiesWithDistricts[provincesValue || ''] || {},
        )

        dataNew[2] =
          citiesWithDistricts[provincesValue || '']?.[
            values[1] || dataNew[1][0]
          ] || []
        console.info(dataNew, 'dataNew')
        resolve(dataNew)
      }, 500)
    })
  }

  return (
    <Picker
      showToolbar
      title="请选择"
      mode="content"
      syncColumns={syncColumns}
      value={value}
      onInput={(e) => {
        setValue(e.detail)
      }}
    />
  )
}
