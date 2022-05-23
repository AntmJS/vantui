/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Search, Toast } from '@antmjs/vantui'

export default function Demo() {
  const [value, setValue] = react.useState('')
  const onSearch = (e) => {
    Toast.show(`search: ${e.detail}`)
  }

  const searchAction = () => {
    Toast.show(`search: ${value}`)
  }

  return (
    <>
      <Search
        onChange={(e) => setValue(e.detail)}
        placeholder="请输入搜索关键词"
        onSearch={onSearch}
        renderAction={<View onClick={searchAction}>搜索</View>}
      />
      <Toast />
    </>
  )
}
