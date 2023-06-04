import { useMemo } from 'react'
import { View } from '@tarojs/components'
import { BaseRecord, WaterfallFlowProps } from '../../types/waterfall-flow'
import { pxTransform } from '../px-transform'
import { useWaterfallAttributes } from './useWaterfallAttributes'
import { WaterfallFlowItem } from './WaterfallFlowItem'

export function WaterfallFlow<TRecord extends BaseRecord = any>({
  columnNum = 2,
  dataSource,
  renderItem,
  gutter = 0,
  calculationDelay = 0,
}: WaterfallFlowProps<TRecord>) {
  const widthGutter = useMemo(() => {
    if (Array.isArray(gutter)) {
      return gutter[0] ?? 0
    }
    if (typeof gutter === 'number') {
      return gutter
    }
    return 0
  }, [gutter])
  const [containerHeight, attributes, { onResize, onRemove }] =
    useWaterfallAttributes(columnNum, gutter)

  const itemWidth = useMemo(() => {
    return `calc((100% - ${pxTransform(
      widthGutter * (columnNum - 1),
    )}) / ${columnNum})`
  }, [columnNum, widthGutter])

  const style = useMemo(() => {
    return {
      width: '100%',
      height: `${containerHeight}px`,
    }
  }, [containerHeight])

  if (!Array.isArray(dataSource) || dataSource?.filter(Boolean)?.length === 0) {
    return null
  }

  return (
    <View className="van-waterfall-flow" style={style}>
      {dataSource?.map?.((item) => {
        return (
          <WaterfallFlowItem
            key={item.key}
            item={item}
            renderItem={renderItem}
            attributes={attributes[item.key]!}
            width={itemWidth}
            onResize={onResize}
            onRemove={onRemove}
            calculationDelay={calculationDelay}
          />
        )
      })}
    </View>
  )
}

export default WaterfallFlow
