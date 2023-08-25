import { useEffect, useState, useCallback } from 'react'
import { View } from '@tarojs/components'
import classnames from 'classnames'
import { SkuProps } from '../../types/sku'
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
    autoChoice = true,
  } = props
  const [currentSkuIds, setCurrentSkuIds] = useState<number[]>([])

  useEffect(
    function () {
      if (!goodsId && goodsList && autoChoice) {
        for (let i = 0; i < goodsList.length; i++) {
          const goodsItem = goodsList[i]
          if (goodsItem?.disabled !== true) {
            if (goodsItem?.skuIds) setCurrentSkuIds(goodsItem.skuIds)
            if (onChange) onChange(goodsItem)
            break
          }
        }
      }

      if (goodsId && goodsList) {
        for (let i = 0; i < goodsList.length; i++) {
          const goodsItem = goodsList[i]
          if (goodsItem?.id === goodsId) {
            if (goodsItem?.skuIds) setCurrentSkuIds(goodsItem.skuIds)
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
      let skuIds = [...(currentSkuIds || [])]
      attrs.map((it) => {
        if (skuIds.includes(it)) skuIds.splice(skuIds.indexOf(it), 1)
      })

      skuIds = skuIds.concat(attrId)

      let canBuy = false

      for (let i = 0; i < goodsList.length; i++) {
        if (
          goodsList[i]?.skuIds &&
          everyItemEqual(goodsList[i]?.skuIds || [], skuIds) &&
          !goodsList[i]?.disabled &&
          (itemDisable?.(goodsList[i]) === false || !itemDisable)
        ) {
          canBuy = true
          break
        }
      }

      return canBuy
    },
    [currentSkuIds, goodsList, itemDisable],
  )

  const attrClick = useCallback(
    function (attrId: number, attrs: number[], canBuy: boolean) {
      if (canBuy) {
        let skuIds = [...(currentSkuIds || [])]
        attrs.map((it) => {
          if (skuIds.includes(it)) skuIds.splice(skuIds.indexOf(it), 1)
        })

        skuIds = skuIds.concat(attrId)

        let choiceGoods

        for (let i = 0; i < goodsList.length; i++) {
          if (
            !(
              (goodsList[i]?.skuIds && !goodsList[i]) ||
              goodsList[i]?.disabled === true ||
              (itemDisable && itemDisable(goodsList[i]))
            )
          ) {
            if (everyItemEqual(skuIds, goodsList[i]?.skuIds || [])) {
              choiceGoods = goodsList[i]
            }
          }
        }

        setCurrentSkuIds(skuIds)

        if (choiceGoods) {
          onChange?.(choiceGoods)
        }
      } else {
        if (clickAttrDisable) clickAttrDisable()
      }
    },
    [clickAttrDisable, currentSkuIds, goodsList, itemDisable, onChange],
  )

  return (
    <View className={`${preCls} ${className}`}>
      {sku.map((item, index) => (
        <View key={`sku#${index}@${item.id}`} className={`${preCls}-item`}>
          <View className={`${preCls}-name`}>{item.name}</View>
          <View className={`${preCls}-attrs`}>
            {item.items.map((it, index) => {
              const othersId = item.items.map((it) => it.id)
              const canBuy = currentAttrCanBuy(it.id, othersId)
              return (
                <View
                  key={`attr#${index}@${it.id}`}
                  onClick={() => attrClick(it.id, othersId, canBuy)}
                  className={classnames({
                    [`${preCls}-attr`]: true,
                    [`${preCls}-attr-active ${activeClassName}`]:
                      currentSkuIds?.includes(it.id),
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
