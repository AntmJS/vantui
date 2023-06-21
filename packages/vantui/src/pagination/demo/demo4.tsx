/* eslint-disable */
import react from 'react'
import { Pagination, Icon } from '@antmjs/vantui'

export default function Demo() {
  const [currentPage4, setCurrentPage4] = react.useState(1)
  const pageChange4 = (v) => {
    const c = v
    setCurrentPage4(c)
  }

  const pageNodeRender = (page) => {
    return <>{page.number == 3 ? 'hot' : page.text}</>
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
