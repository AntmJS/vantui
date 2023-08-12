/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components'
import { Toast, Sku } from '@antmjs/vantui'
import * as COMMON from './common'

export default function Demo() {
  const { sku, goodsList } = COMMON
  // 选中的商品，可以获取自定义属性如：商品图片、价格、数量
  const [currentGoods, setCurrent] = react.useState<any>({})

  const itemDisable = (goodsItem) => {
    if (!goodsItem) return true
    // 商品表可设定count为库存数，或者通过其它条件判断
    if (goodsItem.count === 0) return true

    return false
  }

  return (
    <>
      <Toast />
      <View>当前选择商品：</View>
      <View style={{ paddingBottom: 10 }}>
        HUAWEI手机【{currentGoods?.skuName || '--'}】
      </View>
      <Sku
        autoChoice={true}
        sku={sku}
        goodsList={goodsList}
        onChange={(e) => setCurrent(e)}
        clickAttrDisable={() => Toast.show(`暂无库存`)}
        itemDisable={itemDisable}
        itemRender={(it) => {
          if (it['color']) {
            return (
              <View className="sku-color-item">
                <View
                  className="color-item"
                  style={{ background: it['color'] }}
                ></View>
                <View>{it.name}</View>
              </View>
            )
          }

          return it.name
        }}
      />
    </>
  )
}
