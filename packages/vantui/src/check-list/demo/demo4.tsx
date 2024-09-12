import { useState } from 'react'
import { View } from '@tarojs/components'
import { CheckList, CheckListProps } from '@antmjs/vantui'
import { options, statusArr } from './options'

export default function Demo() {
  const [value, setValue] = useState<CheckListProps['value']>([])

  const onChange: CheckListProps['onChange'] = (e) => {
    setValue(e.detail)
  }

  return (
    <View style={{ display: 'flex' }}>
      <CheckList
        value={value}
        onChange={onChange}
        limit={5}
        labelName="label"
        placeholder="运营公司"
        data={options}
        placeholderColor="#333"
        showArrowDown
      />
      <CheckList
        bodyHeight="max-content"
        placeholder="状态"
        style={{ marginLeft: 12 }}
        limit={1}
        labelName="label"
        data={statusArr}
        placeholderColor="#333"
        showArrowDown
        searchShow={false}
        allowClear={false}
      />
    </View>
  )
}
