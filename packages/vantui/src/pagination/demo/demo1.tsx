/* eslint-disable */
import react from 'react'
import { Pagination } from '@antmjs/vantui'

export default function Demo() {
  const [currentPage1, setCurrentPage1] = react.useState(1)
  const pageChange1 = (v) => {
    const c = v
    setCurrentPage1(c)
  }
  return (
    <Pagination
      modelValue={currentPage1}
      totalItems="25"
      itemsPerPage="5"
      onChange={pageChange1}
    />
  )
}
