import { Search, Toast } from '@antmjs/vantui'

export default function Demo() {
  const onSearch = (e) => {
    Toast.show(`search: ${e.detail}`)
  }
  const onCancel = () => {
    Toast.show(`onCancel`)
  }
  return (
    <>
      <Search
        placeholder="请输入搜索关键词"
        showAction
        onSearch={onSearch}
        onCancel={onCancel}
      />
      <Toast />
    </>
  )
}
