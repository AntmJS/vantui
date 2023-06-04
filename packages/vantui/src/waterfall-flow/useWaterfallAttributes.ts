import { useEffect, useMemo, useRef } from 'react'
import { BaseRecord } from '../../types/waterfall-flow'
import {
  Gutter,
  WaterfallFlowColumn,
  WaterfallFlowItemAttributes,
  WaterfallFlowItemSize,
} from './types'
import { useNextTick } from './hooks/useNextTick'
import { useForceUpdate, usePersistFn } from './hooks'

/**
 * @description 当某一项的size变化时的回调
 * @param item 变化的项
 * @param size 变化后的size
 */
export type OnResize<TRecord> = (
  item: TRecord,
  size: WaterfallFlowItemSize,
) => void
/**
 * @description 当某一项被移除时的回调
 * @param item 被移除的项
 */
export type OnRemove<TRecord> = (item: TRecord) => void

interface InitItem<TRecord> {
  item: TRecord
  size: WaterfallFlowItemSize
}

interface ItemResizeStatus<TRecord> {
  lastSize: WaterfallFlowItemSize
  isResizing: boolean
  item: TRecord
}

type AttributesRes<TRecord> = [
  number,
  Record<string, WaterfallFlowItemAttributes>,
  {
    onResize: OnResize<TRecord>
    onRemove: OnRemove<TRecord>
  },
]

export const useWaterfallAttributes = <TRecord extends BaseRecord>(
  columnNum: number,
  gutter: Gutter,
): AttributesRes<TRecord> => {
  const forceUpdate = useForceUpdate()

  const [horizontalGutter, verticalGutter] = useMemo(() => {
    if (Array.isArray(gutter)) {
      return gutter
    }
    if (typeof gutter === 'number') {
      return [gutter, gutter]
    }
    return [0, 0]
  }, [gutter])

  // 记录每一项的位置信息
  const attributesRef = useRef(new Map<string, WaterfallFlowItemAttributes>())
  const columnsRef = useRef<WaterfallFlowColumn[]>(
    [...Array(columnNum)].map(() => ({ height: 0, items: [] })),
  )

  // 一个队列，用来存储各个元素的尺寸变化，然后统一计算更新，Taro.nextTick?
  const initItemsQueueRef = useRef<InitItem<TRecord>[]>([])
  const itemResizeStatusRef = useRef<Map<string, ItemResizeStatus<TRecord>>>(
    new Map(),
  )

  useEffect(() => {
    attributesRef.current = new Map<string, WaterfallFlowItemAttributes>()
    columnsRef.current = [...Array(columnNum)].map(() => ({
      height: 0,
      items: [],
    }))
    forceUpdate()
  }, [columnNum, forceUpdate])

  const initItem = usePersistFn(
    (item: TRecord, size: WaterfallFlowItemSize) => {
      const columnHeights = columnsRef.current.map((column) => column.height)
      const minHeight = Math.min(...columnHeights)
      const minHeightIndex = columnHeights.indexOf(minHeight)
      const increaseHeight = minHeight ? verticalGutter : 0
      attributesRef.current.set(item.key, {
        // 计算每一项的位置、宽高、列索引
        key: item.key,
        left: minHeightIndex * (size.width + horizontalGutter),
        top: minHeight + increaseHeight,
        width: size.width,
        height: size.height,
        columnIndex: minHeightIndex,
      })
      columnsRef.current[minHeightIndex]!.height += size.height + increaseHeight
      columnsRef.current[minHeightIndex]!.items.push(item.key)
    },
  )

  // 初始化
  useNextTick(() => {
    const hasInit = initItemsQueueRef.current?.length > 0
    while (initItemsQueueRef.current?.length > 0) {
      const { item, size } =
        initItemsQueueRef.current.shift() ??
        ({} as {
          item: TRecord
          size: WaterfallFlowItemSize
        })
      initItem(item, size)
    }
    hasInit && forceUpdate()
  })

  const refreshColumns = usePersistFn(
    (item: TRecord, size: WaterfallFlowItemSize) => {
      const positionItem = attributesRef.current.get(item?.key)
      if (typeof positionItem?.columnIndex !== 'number') {
        return
      }
      // 计算出当前项在所在列的索引，然后更新该列的高度
      const { columnIndex } = positionItem
      const { items } = columnsRef.current[columnIndex]!
      // 获取当前项所在的索引
      const index = items.indexOf(item?.key)
      const { height = 0, ...otherProps } =
        attributesRef.current.get(item?.key) ??
        ({} as WaterfallFlowItemAttributes)
      // 计算出当前项的高度和间隔的差值
      const minusHeight = height - size.height
      attributesRef.current.set(item?.key, {
        ...otherProps,
        height: size.height,
      })
      for (let i = index + 1; i < items.length; i++) {
        const nextKey = items[i]!
        const nextItem =
          attributesRef.current.get(nextKey) ??
          ({} as WaterfallFlowItemAttributes)
        const { top: nextTop } = nextItem
        // 当前列的后续项的top值需要减去当前项的高度和间隔
        attributesRef.current.set(nextKey, {
          ...nextItem,
          top: nextTop - minusHeight,
        })
      }
      columnsRef.current[columnIndex]!.height -= minusHeight
    },
  )

  // 处理resize
  useNextTick(() => {
    const entries = [...itemResizeStatusRef.current]
    const hasResizing = entries.some(([, { isResizing }]) => isResizing)
    if (!hasResizing) {
      return
    }
    entries.forEach(([key, resizeStatus]) => {
      const { lastSize, isResizing, item } = resizeStatus
      if (isResizing) {
        refreshColumns(item, lastSize)
        itemResizeStatusRef.current.set(key, {
          ...resizeStatus,
          isResizing: false,
        })
      }
    })
    forceUpdate()
  })

  const onResize = usePersistFn(
    (item: TRecord, size: WaterfallFlowItemSize) => {
      if (!(size?.width ?? size?.height ?? false)) {
        return
      }
      const { columnIndex } = attributesRef.current.get(item?.key) ?? {}
      // 如果已经计算好所在列，则走更新逻辑
      if (typeof columnIndex === 'number') {
        itemResizeStatusRef.current.set(item?.key, {
          lastSize: size,
          isResizing: true,
          item,
        })
      } else {
        initItemsQueueRef.current.push({
          item,
          size,
        })
      }
      forceUpdate()
    },
  )

  const onRemove = usePersistFn((item: TRecord) => {
    const positionItem = attributesRef.current.get(item?.key)
    if (typeof positionItem?.columnIndex !== 'number') {
      return
    }
    // 计算出当前项在所在列的索引，然后更新该列的高度
    const { columnIndex } = positionItem
    const { items } = columnsRef.current[columnIndex]!
    const index = items.indexOf(item?.key)
    const { top = 0, height: minusHeight = 0 } =
      attributesRef.current.get(item?.key) ?? {}
    let columnHeight = top
    for (let i = index + 1; i < items.length; i++) {
      const nextKey = items[i]!
      const nextItem =
        attributesRef.current.get(nextKey) ??
        ({} as WaterfallFlowItemAttributes)
      const { top: nextTop, height: nextHeight } = nextItem
      // 当前列的后续项的top值需要减去当前项的高度和间隔
      attributesRef.current.set(nextKey, {
        ...nextItem,
        top: nextTop - minusHeight - verticalGutter,
      })
      const increaseGutter = columnHeight && verticalGutter
      columnHeight += nextHeight + increaseGutter
    }
    columnsRef.current[columnIndex]!.height = columnHeight
    columnsRef.current[columnIndex]!.items.splice(index, 1)
    attributesRef.current.delete(item?.key)
    forceUpdate()
  })

  const positionRecord: Record<string, WaterfallFlowItemAttributes> =
    Object.assign(
      {},
      ...[...attributesRef.current.entries()].map(([key, value]) => {
        return { [key]: value }
      }),
    )

  const columnHeights = columnsRef.current.map((column) => column.height)
  const containerHeight = Math.max(...columnHeights)

  return [containerHeight, positionRecord, { onResize, onRemove }]
}
