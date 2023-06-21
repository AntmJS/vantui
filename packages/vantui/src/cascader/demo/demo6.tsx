/* eslint-disable */
import react from 'react'
import { Cell, Cascader } from '@antmjs/vantui'

export default function Demo() {
  const [isVisiblevalue, setIsVisiblevalue] = react.useState(false)
  const [value, setValue] = react.useState(['广东省', '广州市'])
  const [optionsvalue] = react.useState([
    { value: '北京', text: '北京', id: 1, pid: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
    { value: '广东省', text: '广东省', id: 2, pid: null },
    { value: '广州市', text: '广州市', id: 21, pid: 2 },
  ])
  const [convertConfigvalue] = react.useState({
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: '',
  })
  const change = (value) => {
    setValue(value)
  }

  return (
    <>
      <Cell
        title="选择地址"
        value={value ? value.join('-') : '请选择地址'}
        onClick={() => {
          setIsVisiblevalue(true)
        }}
      ></Cell>
      <Cascader
        visible={isVisiblevalue}
        value={value}
        title="地址选择"
        options={optionsvalue}
        convertConfig={convertConfigvalue}
        closeable
        onClose={() => {
          setIsVisiblevalue(false)
        }}
        onChange={change}
      />
    </>
  )
}
