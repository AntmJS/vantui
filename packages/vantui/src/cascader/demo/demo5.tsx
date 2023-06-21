/* eslint-disable */
import react from 'react'
import { Cell, Cascader } from '@antmjs/vantui'

export default function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value, setvalue] = react.useState([])
  const [options] = react.useState([
    { value: 'A0', text: 'A0' },
    {
      value: 'B0',
      text: 'B0',
      children: [
        { value: 'B11', text: 'B11', leaf: true },
        { value: 'B12', text: 'B12' },
      ],
    },
    { value: 'C0', text: 'C0' },
  ])

  const lazyLoad = (node, resolve) => {
    setTimeout(() => {
      const { value, level } = node
      const text = value.substring(0, 1)
      const value1 = `${text}${level + 1}1`
      const value2 = `${text}${level + 1}2`
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 },
      ])
    }, 500)
  }
  const change = (value) => {
    setvalue(value)
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
        visible={isVisible}
        value={value}
        title="地址选择"
        options={options}
        closeable
        onClose={() => {
          setIsVisible(false)
        }}
        onChange={change}
        lazy
        lazyLoad={lazyLoad}
      />
    </>
  )
}
