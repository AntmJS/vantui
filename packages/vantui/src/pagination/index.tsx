import { View } from '@tarojs/components'
import React, { useCallback, useEffect, useState } from 'react'
import { PaginationProps } from '../../types/pagination'

const clsPrefix = 'van-pagination'

export function Pagination(
  props: Partial<PaginationProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
) {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    modelValue,
    mode = 'multi',
    prevText = '上一页',
    nextText = '下一页',
    pageCount = '',
    totalItems = '0',
    itemsPerPage = '10',
    showPageSize = '5',
    onChange,
    updatecurrent,
    forceEllipses = false,
    pageNodeRender,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    defaultValue = 1,
    className = (item: any) => {
      return item.text
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ...rest
  } = props

  const [currentPage, setCurrent] = useState(1)
  const [pages, setPages] = useState<any>([])
  const [countRef, setCountRef] = useState(Number(pageCount))
  // 计算页面的数量
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const computedCountRef = useCallback(() => {
    const num =
      Number(pageCount) || Math.ceil(Number(totalItems) / Number(itemsPerPage))
    return num + '' === 'NaN' ? 1 : Math.max(1, num)
  }, [itemsPerPage, pageCount, totalItems])

  // 生成pages数组，用来遍历
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const computedPages = (_currentPage?: number, _countRef?: number) => {
    if (mode == 'simple') return []
    const items: any[] = []
    const pageCount = _countRef || countRef // 总的页面数量
    const pageSize = Number(showPageSize) // 展示的页面个数
    const _current = _currentPage || Number(currentPage) // 当前页
    let startPage = 1
    let endPage = pageCount
    const partialShow = pageCount > pageSize
    if (partialShow) {
      // 选中的page在展示的page中间
      startPage = Math.max(_current - Math.floor(pageSize / 2), 1)
      endPage = startPage + pageSize - 1
      if (endPage > pageCount) {
        endPage = pageCount
        startPage = endPage - pageSize + 1
      }
    }
    // 遍历生成数组
    for (let i = startPage; i <= endPage; i++) {
      const page = setPage(i, i, _current == i)
      items.push(page)
    }
    // 判断是否有折叠
    if (partialShow && pageSize > 0 && forceEllipses) {
      if (startPage > 1) {
        const prevPage = setPage(startPage - 1, '...')
        items.unshift(prevPage)
      }
      if (endPage < pageCount) {
        const nextPage = setPage(endPage + 1, '...')
        items.push(nextPage)
      }
    }
    return items
  }
  // 点击选择page
  const selectPage = (curPage: number, isSelect: boolean) => {
    if (curPage > countRef || curPage < 1) return
    // 是否传入modelValue
    if (!('modelValue' in props)) {
      setCurrent(Number(curPage))
      if (curPage != currentPage) {
        setPages(computedPages(curPage))
      }
    }
    if (curPage != currentPage) {
      updatecurrent && updatecurrent(curPage)
    }
    if (isSelect) onChange && onChange(curPage)
  }
  // set page 对象
  const setPage = (number: any, text: any, active?: any) => {
    return { number, text, active }
  }

  useEffect(() => {
    // 初始化 判断是否传入值 计算 当前页，总页数，生成子节点
    let currentValue = props.defaultValue || 1
    if ('modelValue' in props) {
      currentValue = Number(props.modelValue)
    }
    const pageCount = computedCountRef()
    setCountRef(pageCount)
    setPages(computedPages(currentValue, pageCount))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props, computedCountRef])

  if ('modelValue' in props) {
    const current = props.modelValue ? Number(props.modelValue) : 1
    if (current !== currentPage) {
      setCurrent(current)
      setPages(computedPages(Number(current)))
    }
  }

  return (
    <View className={`${clsPrefix} ${className}`} {...rest}>
      <View
        className={`${clsPrefix}-prev  ${
          mode == 'multi' ? '' : 'simple-border'
        } ${currentPage == 1 ? 'disabled' : ''}`}
        onClick={() => selectPage(Number(currentPage) - 1, true)}
      >
        {prevText}
      </View>
      {mode == 'multi' ? (
        <View className={`${clsPrefix}-contain`}>
          {pages.map((item: any, index: number) => {
            return (
              <View
                key={`${index}pagination`}
                className={`${clsPrefix}-item ${item.active ? 'active' : ''}`}
                onClick={() =>
                  !item.active ? selectPage(item.number, true) : ''
                }
              >
                {pageNodeRender ? pageNodeRender(item) : item.text}
              </View>
            )
          })}
        </View>
      ) : (
        ''
      )}
      {mode == 'simple' ? (
        <View className={`${clsPrefix}-contain`}>
          <View className={`${clsPrefix}-simple`}>
            {currentPage}/{countRef}
          </View>
        </View>
      ) : (
        ''
      )}
      <View
        className={`${clsPrefix}-next  ${
          Number(currentPage) >= countRef ? 'disabled' : ''
        }`}
        onClick={() => selectPage(Number(currentPage) + 1, true)}
      >
        {nextText}
      </View>
    </View>
  )
}

export default Pagination
