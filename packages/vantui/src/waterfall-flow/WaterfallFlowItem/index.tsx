import React, { useEffect, useMemo } from 'react'
import { View } from '@tarojs/components'
import { BaseRecord } from '../../../types/waterfall-flow'
import { OnRemove, OnResize } from '../useWaterfallAttributes'
import { useForceUpdate, usePersistFn, useSubscribeElementSize } from '../hooks'
import { Size } from '../utils/element'
import { WaterfallFlowItemAttributes } from '../types'
import { useForceResize } from './useForceResize'

interface WaterfallFlowItemProps<TRecord> {
  /**
   * 渲染函数
   * @param item 数据项
   * @param forceUpdate 强制刷新，当有自定义内容没有被瀑布流组件监听到size刷新时，需要调用该函数刷新视图
   */
  renderItem: (item: TRecord, forceUpdate: () => void) => React.ReactNode
  /**
   * 数据项
   * @param item 数据项
   */
  item: TRecord
  /**
   * 瀑布流属性
   * @param attributes 瀑布流属性
   * @param attributes.key 元素key
   * @param attributes.left 左边距
   * @param attributes.top 上边距
   * @param attributes.width 宽度
   * @param attributes.height 高度
   * @param attributes.columnIndex 所在列
   */
  attributes: WaterfallFlowItemAttributes
  /**
   * 元素Resize事件，参考useWaterfallAttributes返回值
   */
  onResize?: OnResize<TRecord>
  /**
   * 元素Remove事件，参考useWaterfallAttributes返回值
   */
  onRemove?: OnRemove<TRecord>
  /**
   * 瀑布流列宽
   * @param width 瀑布流列宽
   * @default 100%
   */
  width: string
  /**
   * 元素延迟计算时间
   * @default 0
   * @description 当渲染项中有图片等加载较慢的元素时，为了保证元素的高度和位置能够被正确计算，需要延迟一段时间再计算元素的高度，该值为延迟时间
   */
  calculationDelay: number
}

export function WaterfallFlowItem<TRecord extends BaseRecord>({
  renderItem,
  item,
  attributes,
  onResize,
  onRemove,
  width,
  calculationDelay = 0,
}: WaterfallFlowItemProps<TRecord>) {
  const forceUpdate = useForceUpdate()
  const id = `waterfall-flow-item-${item?.key}`
  const compareId = `waterfall-flow-item-compare-${item?.key}`
  const contentId = `waterfall-flow-item-content-${item?.key}`

  const style = useMemo(() => {
    if (!attributes?.width) {
      return {
        width,
        height: '1px',
      }
    }
    return {
      width,
      height: `${attributes?.height}px`,
      left: `${attributes?.left}px`,
      top: `${attributes?.top}px`,
    }
  }, [attributes, width])

  const contentStyle = useMemo(() => {
    return {
      top: attributes?.height ? `-${attributes?.height - 1}px` : '0',
    }
  }, [attributes])

  const onItemResize = usePersistFn((size: Size) => {
    if (typeof onResize !== 'function') {
      return
    }
    onResize(item, size)
  })

  useSubscribeElementSize(
    `#${contentId}`,
    `#${compareId}`,
    `#${id}`,
    onItemResize,
    calculationDelay,
    [item],
  )

  const onItemRemove = usePersistFn(() => {
    if (typeof onRemove !== 'function') {
      return
    }
    onRemove(item)
  })

  const forceResize = useForceResize(`#${contentId}`, onItemResize)

  const child = useMemo(() => {
    if (typeof renderItem !== 'function') {
      return null
    }
    return renderItem(item, forceResize)
  }, [renderItem, item, forceResize])

  useEffect(() => {
    return () => {
      onItemRemove()
    }
  }, [onItemRemove])

  useEffect(() => {
    // 当元素发生变化时，主动刷新视图，保证内容更新以后的高度能够被正确计算
    forceUpdate()
  }, [item, forceUpdate])

  useEffect(() => {
    // 当元素宽度发生变化时，主动刷新视图，保证内容更新以后的高度能够被正确计算
    forceUpdate()
  }, [width, forceUpdate])

  return (
    <View className="van-waterfall-flow-item" style={style} id={id}>
      <View className="van-compare-area" id={compareId}>
        <View
          className="van-waterfall-flow-item-content"
          id={contentId}
          style={contentStyle}
        >
          {child}
        </View>
      </View>
    </View>
  )
}
