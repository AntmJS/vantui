/* eslint-disable @typescript-eslint/ban-ts-comment */
import { pxTransform } from '@tarojs/taro'
import classnames from 'classnames'
import useDeepCompareEffect from 'use-deep-compare-effect'
import { ScrollView, Text, View } from '@tarojs/components'
import React, { memo, useCallback, useEffect, useState, useMemo } from 'react'
import { IColumns, ITableProps } from '../../types/table'
import { Loading } from '../loading'
import { Empty } from '../empty'
import { Sticky } from '../sticky'

const DEFAULT_COL_WIDTH = 100
const UNIFY_PADDING = {
  padding: '8px',
}
const JC_TA_MAP = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

type FixedType = 'left' | 'right'
type SortOrder = 'ascend' | 'descend' | undefined

export const Table = (props: ITableProps): JSX.Element | null => {
  const {
    columns: pColumns = [],
    dataSource: pDataSource = [],
    rowKey = '',
    loading = false,
    className = '',
    style = {},
    titleClassName = '',
    titleStyle = {},
    rowClassName = '',
    rowStyle = {},
    colStyle = {},
    colClassName = '',
    sortChange = (): void => {},
    scroll = {},
    placeholder = '--',
    scrollViewProps = {},
    sticky = false,
  } = props

  const [error, setError] = useState<boolean>(false)
  const [dataSource, setDataSource] =
    useState<Record<string, any>[]>(pDataSource)
  const [columns, setColumns] = useState<IColumns[]>(pColumns)
  const [expansion, setExpansion] = useState<boolean>(true)

  useEffect(() => {
    setDataSource(pDataSource)
  }, [pDataSource])

  useEffect(() => {
    if (
      pColumns.some((i: Record<string, any>) => {
        return !['number', 'undefined'].includes(typeof i['width'])
      })
    ) {
      console.error(
        '(antmjs/vantui)[table]: columns配置项的width应该设置为number ',
      )
      setError(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columns])

  useDeepCompareEffect(() => {
    setColumns(pColumns)
  }, [pColumns])

  // methods
  /**
   * @description 表头点击事件
   * @param item
   * @param index
   */
  const handleClickTitle = useCallback(
    (item: IColumns, index: number): void => {
      if (!item.sort) return
      const array: SortOrder[] = ['descend', 'ascend', undefined]
      sortChange({
        ...item,
        sortOrder: array[(array.indexOf(item.sortOrder) + 1) % array.length],
      })

      const temp: IColumns[] = [...columns]

      // 仅支持单个排序触发sortChange请求
      const sortItems: IColumns[] = temp.filter((a) => {
        return a.sortOrder === 'ascend' || a.sortOrder === 'descend'
      })
      // @ts-ignore
      const curr: number = array.indexOf(temp[index].sortOrder)
      // @ts-ignore
      temp[index].sortOrder = array[(curr + 1) % array.length]

      sortItems.map((b) => {
        temp.forEach((c, ind) => {
          if (c.dataIndex === b.dataIndex && ind !== index) {
            c.sortOrder = undefined
          }
        })
      })
      setColumns(temp)
    },
    [columns, sortChange],
  )

  /**
   * @description 固定列的时候计算偏移量
   * @param fixedType
   * @param index
   */
  const getFixedDistance = useCallback(
    (fixedType: FixedType, index) => {
      let result: number
      if (fixedType === 'left') {
        result = columns.reduce(function (prev, cur, i) {
          if (i + 1 <= index) {
            return prev + (cur.width || DEFAULT_COL_WIDTH)
          }

          return prev
        }, 0)
      } else {
        result = columns.reduceRight(function (prev, cur, i) {
          if (i - 1 >= index) {
            return prev + (cur.width || DEFAULT_COL_WIDTH)
          }

          return prev
        }, 0)
      }

      return getSize(result)
    },
    [columns],
  )

  const wrapWidth = useMemo((): number => {
    return columns.reduce(function (prev, cur) {
      return prev + (cur.width || DEFAULT_COL_WIDTH)
    }, 0)
  }, [columns])

  const renderSticky = useMemo(() => {
    const main = (
      <View
        className={classnames({
          ['van-table_head']: true,
          ['van-table_scroll']: scroll.y,
        })}
      >
        {columns.length === 0 ? (
          <Empty description={loading ? '加载中...' : '暂无数据'} />
        ) : (
          columns.map((item: IColumns, index: number): JSX.Element => {
            return (
              <Title
                key={item.key || item.dataIndex}
                column={item}
                index={index}
                handleClickTitle={handleClickTitle}
                titleClassName={titleClassName}
                getFixedDistance={getFixedDistance}
                titleStyle={titleStyle}
              />
            )
          })
        )}
      </View>
    )
    if (sticky) {
      const stickyProps = typeof sticky === 'boolean' ? {} : sticky
      return <Sticky {...stickyProps}>{main}</Sticky>
    } else {
      return main
    }
  }, [
    columns,
    getFixedDistance,
    handleClickTitle,
    loading,
    scroll.y,
    sticky,
    titleClassName,
    titleStyle,
  ])

  if (error) {
    return null
  }

  return (
    <View
      className={classnames(['van-table', className])}
      style={{
        width: wrapWidth,
        ...style,
      }}
    >
      {loading && <Loading type="spinner" className="van-table-loading" />}
      <ScrollView
        className="van-table_table"
        scroll-x={dataSource.length !== 0 ? scroll.x : false}
        scroll-y={scroll.y}
        style={{
          maxWidth: getSize(scroll.x as number | string),
          maxHeight: getSize(scroll.y as number | string),
        }}
        {...scrollViewProps}
      >
        {renderSticky}
        <View className="van-table_body">
          {dataSource.length > 0 ? (
            dataSource.map(
              (
                dataSourceItem: Record<string, any>,
                index: number,
              ): JSX.Element => {
                return (
                  <Row
                    key={dataSourceItem[rowKey]}
                    dataSourceItem={dataSourceItem}
                    index={index}
                    placeholder={placeholder}
                    rowClassName={rowClassName}
                    colClassName={colClassName}
                    rowStyle={rowStyle}
                    colStyle={colStyle}
                    rowKey={rowKey}
                    columns={columns}
                    setExpansion={setExpansion}
                    expansion={expansion}
                    getFixedDistance={getFixedDistance}
                  />
                )
              },
            )
          ) : (
            <Empty description={loading ? '加载中...' : '暂无数据'} />
          )}
        </View>
      </ScrollView>
    </View>
  )
}

export default memo(Table)

const getSize = (size: string | number): string => {
  if (typeof size === 'number') {
    return pxTransform((size as number) * 2)
  }

  return String(size)
}

const Row = (props: {
  key: any
  dataSourceItem: Record<string, any>
  index: number
  placeholder: React.ReactNode
  rowClassName: string
  colClassName: string
  rowStyle: React.CSSProperties
  colStyle: React.CSSProperties
  rowKey: string
  columns: IColumns[]
  setExpansion: any
  expansion: boolean
  getFixedDistance: any
}): JSX.Element => {
  const {
    dataSourceItem,
    index,
    placeholder,
    rowClassName,
    rowStyle,
    colStyle,
    colClassName,
    rowKey,
    columns,
    setExpansion,
    expansion,
    getFixedDistance,
  } = props

  return (
    <View
      key={dataSourceItem[rowKey]}
      className={classnames({
        ['van-table_row']: true,
        [rowClassName]: true,
      })}
      style={rowStyle}
    >
      {columns.map((columnItem: IColumns, colIndex: number): JSX.Element => {
        const text = dataSourceItem[columnItem.dataIndex]
        const expandable = !!columnItem.expandable
        let result

        if (columnItem.render) {
          const render = columnItem.render(text, dataSourceItem, index)

          if (typeof render !== 'object') {
            result = <Text>{render}</Text>
          } else {
            result = render
          }
        } else {
          result = (
            <Text>
              {text || text === false || text === 0
                ? String(text)
                : placeholder}
            </Text>
          )
        }

        return (
          <View
            onClick={expandable && setExpansion.bind(this, !expansion)}
            key={columnItem.key || columnItem.dataIndex}
            className={classnames({
              [colClassName]: true,
              ['van-table_col']: true,
              ['van-table_fixed']: columnItem.fixed,
              ['van-table_expansion']: expansion,
              [columnItem.className as string]: true,
            })}
            style={{
              textAlign: columnItem.align || 'left',
              width: getSize(columnItem.width || DEFAULT_COL_WIDTH),
              [columnItem.fixed as string]:
                columnItem.fixed &&
                getFixedDistance(columnItem.fixed, colIndex),
              ...columnItem.style,
              ...colStyle,
              ...UNIFY_PADDING,
            }}
          >
            {result}
          </View>
        )
      })}
    </View>
  )
}

const Title = (props: {
  key: any
  column: IColumns
  index: number
  handleClickTitle: (item: IColumns, index: number) => void
  titleClassName: string
  titleStyle?: React.CSSProperties
  getFixedDistance: (fixedType: FixedType, index: number) => string
}): JSX.Element => {
  const {
    column,
    index,
    handleClickTitle,
    titleClassName,
    getFixedDistance,
    titleStyle,
  } = props

  return (
    <View
      onClick={handleClickTitle.bind(this, column, index)}
      className={classnames({
        ['van-table_title']: true,
        ['van-table_fixed']: column.fixed,
        [column.titleClassName || '']: true,
        [titleClassName]: true,
      })}
      style={{
        [column.fixed as string]:
          column.fixed && getFixedDistance(column.fixed, index),
        width: getSize(column.width || DEFAULT_COL_WIDTH),
        ...column.titleStyle,
        ...titleStyle,
        justifyContent: JC_TA_MAP[column.align || 'left'],
        ...UNIFY_PADDING,
      }}
      key={column.key || column.dataIndex}
    >
      <Text>{column.title}</Text>
      {column.sort && (
        <View className="van-table_sortBtn">
          <View
            className={classnames({
              ['van-table_btn']: true,
              ['van-table_ascend']: true,
              ['van-table_active']: column.sortOrder === 'ascend',
            })}
          />
          <View
            className={classnames({
              ['van-table_btn']: true,
              ['van-table_descend']: true,
              ['van-table_active']: column.sortOrder === 'descend',
            })}
          />
        </View>
      )}
    </View>
  )
}
