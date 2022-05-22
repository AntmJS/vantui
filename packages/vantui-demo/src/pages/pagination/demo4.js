/* eslint-disable */
import react from 'react'
import { div, Pagination, Icon } from '@antmjs/vantui'

export default function Demo() {
  const [currentPage4, setCurrentPage4] = react.useState(1)
  const pageChange4 = (v) => {
    const c = v
    setCurrentPage4(c)
  }

  const pageNodeRender = (page) => {
    return <div>{page.number == 3 ? 'hot' : page.text}</div>
  }

  return (
    <Pagination
      modelValue={currentPage4}
      totalItems="500"
      showPageSize="5"
      onChange={pageChange4}
      pageNodeRender={pageNodeRender}
      prevText={<Icon name="arrow-left" />}
      nextText={<Icon name="arrow" />}
    />
  )
}
