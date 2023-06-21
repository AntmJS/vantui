/* eslint-disable */
import react from 'react'
import { Cell, Cascader } from '@antmjs/vantui'
import { options as opt } from './demo-opt'

export default function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value1, setValue1] = react.useState([])
  const [options] = react.useState(opt)
  const change1 = (value, path) => {
    console.log('onChange', value, path)
    setValue1(value)
  }
  const onPathChange = (value, path) => {
    console.log('onPathChange', value, path)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value1 ? value1.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisible(true)
        }}
      ></Cell>
      <Cascader
        visible={isVisible}
        value={value1}
        title="地址选择"
        options={options}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change1}
        onPathChange={onPathChange}
      />
    </>
  )
}
