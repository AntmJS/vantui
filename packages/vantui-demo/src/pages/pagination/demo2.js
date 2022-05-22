/* eslint-disable */
import react from 'react'
import { Pagination } from '@antmjs/vantui'

export default function Demo() {
  const [currentPage2, setCurrentPage2] = react.useState(1)
  const pageChange2 = (v) => {
    const c = v
    setCurrentPage2(c)
  }

  return (
    <Pagination
      modelValue={currentPage2}
      pageCount={12}
      mode="simple"
      onChange={pageChange2}
    />
  )
}
