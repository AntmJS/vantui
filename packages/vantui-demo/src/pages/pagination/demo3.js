/* eslint-disable */
import react from 'react'
import { Pagination } from '@antmjs/vantui'

export default function Demo() {
  const [currentPage3, setCurrentPage3] = react.useState(1)
  const pageChange3 = (v) => {
    const c = v
    setCurrentPage3(c)
  }

  return (
    <Pagination
      modelValue={currentPage3}
      totalItems="125"
      showPageSize="3"
      forceEllipses
      onChange={pageChange3}
    />
  )
}
