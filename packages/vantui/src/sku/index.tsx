import { useEffect, useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import { SkuProps, IGoodItem } from '../../types/sku'
import { everyItemEqual } from './utils'

const preCls = `van-sku`

export default function Sku(props: SkuProps) {
  const {
    sku = [],
    className = '',
    goodsList = [],
    goodsId,
    onChange,
    clickAttrDisable,
    itemRender,
    disabledClassName = '',
    activeClassName = '',
    itemDisable,
  } = props
  const [currentGoods, setCurrentGoods] = useState<IGoodItem>()

  useEffect(
    function () {
      if (!goodsId && goodsList) {
        for (let i = 0; i < goodsList.length; i++) {
          const goodsItem = goodsList[i]
          if (goodsItem?.disabled !== true) {
            setCurrentGoods(goodsItem)
            if (onChange) onChange(goodsItem)
            break
          }
        }
      }

      if (goodsId && goodsList) {
        for (let i = 0; i < goodsList.length; i++) {
          const goodsItem = goodsList[i]
          if (goodsItem?.id === goodsId) {
            setCurrentGoods(goodsItem)
            break
          }
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [goodsId, goodsList],
  )

  const currentAttrCanBuy = useCallback(
    function (attrId: number, attrs: any[]) {
      let skuIds = [...(currentGoods?.skuIds || [])]
      if (!skuIds.length) return undefined
      const usedAttrId = attrs.filter((it) => skuIds.includes(it.id))[0].id

      skuIds.splice(skuIds.indexOf(usedAttrId), 1)

      skuIds = skuIds.concat(attrId)

      let canBuyGoodsItem: IGoodItem | undefined = undefined

      for (let i = 0; i < goodsList.length; i++) {
        if (
          goodsList[i]?.skuIds &&
          everyItemEqual(goodsList[i]?.skuIds || [], skuIds)
        ) {
          canBuyGoodsItem = goodsList[i]
          break
        }
      }

      return canBuyGoodsItem
    },
    [currentGoods?.skuIds, goodsList],
  )

  const attrClick = useCallback(
    function (canBuyGoodsItem?: IGoodItem, canBuy?: boolean) {
      if (canBuy) {
        setCurrentGoods(canBuyGoodsItem)
        if (onChange) onChange(canBuyGoodsItem)
      } else {
        if (clickAttrDisable) clickAttrDisable(canBuyGoodsItem)
      }
    },
    [clickAttrDisable, onChange],
  )

  return (
    <View className={`${preCls} ${className}`}>
      {sku.map((item, index) => (
        <View key={`sku#${index}@${item.id}`} className={`${preCls}-item`}>
          <View className={`${preCls}-name`}>{item.name}</View>
          <View className={`${preCls}-attrs`}>
            {item.items.map((it, index) => {
              const canBuyGoodsItem = currentAttrCanBuy(it.id, item.items)
              const canBuy =
                !canBuyGoodsItem ||
                canBuyGoodsItem.disabled === true ||
                (itemDisable && itemDisable(canBuyGoodsItem))
                  ? false
                  : true
              return (
                <View
                  key={`attr#${index}@${it.id}`}
                  onClick={() => attrClick(canBuyGoodsItem, canBuy)}
                  className={classnames({
                    [`${preCls}-attr`]: true,
                    [`${preCls}-attr-active ${activeClassName}`]:
                      currentGoods?.skuIds.includes(it.id),
                    [`${preCls}-attr-disable ${disabledClassName}`]: !canBuy,
                  })}
                >
                  {itemRender ? itemRender(it) : it.name}
                </View>
              )
            })}
          </View>
        </View>
      ))}
    </View>
  )
}
