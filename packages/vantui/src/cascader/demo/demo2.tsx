/* eslint-disable */
import react from 'react'
import { Cell, Cascader, CascaderOption } from '@antmjs/vantui'
import { costomOptions } from './demo-costom-opt'

export default function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value, setValue] = react.useState([])
  const [options] = react.useState<CascaderOption[]>(costomOptions)
  const change = (value, path) => {
    console.log('onChange', value, path)
    setValue(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value ? value.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        textKey="text1"
        valueKey="value1"
        childrenKey="items"
        visible={isVisible}
        value={value}
        title="地址选择"
        options={options}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change}
      />
    </>
  )
}
