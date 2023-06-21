/* eslint-disable */
import react from 'react'
import { Cell, Cascader } from '@antmjs/vantui'

export default function Demo() {
  const [isVisible, setIsVisible] = react.useState(false)
  const [value, setValue] = react.useState(['A0', 'A12', 'A23', 'A32'])

  const lazyLoad = (node, resolve) => {
    setTimeout(() => {
      if (node.root) {
        resolve([
          { value: 'A0', text: 'A0' },
          { value: 'B0', text: 'B0' },
          { value: 'C0', text: 'C0' },
        ])
      } else {
        const { value, level } = node
        const text = value.substring(0, 1)
        const value1 = `${text}${level + 1}1`
        const value2 = `${text}${level + 1}2`
        const value3 = `${text}${level + 1}3`
        resolve([
          { value: value1, text: value1, leaf: level >= 6 },
          { value: value2, text: value2, leaf: level >= 6 },
          { value: value3, text: value3, leaf: level >= 6 },
        ])
      }
    }, 2000)
  }
  const change = (value) => {
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
        visible={isVisible}
        value={value}
        title="地址选择"
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
