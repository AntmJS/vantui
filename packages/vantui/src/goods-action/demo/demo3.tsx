import { GoodsAction, GoodsActionIcon, GoodsActionButton } from '@antmjs/vantui'

export default function Demo() {
  return (
    <GoodsAction>
      <GoodsActionIcon icon="chat-o" text="客服" />
      <GoodsActionIcon icon="shop-o" text="店铺" />
      <GoodsActionButton color="#be99ff" text="加入购物车" type="warning" />
      <GoodsActionButton color="#7232dd" text="立即购买" />
    </GoodsAction>
  )
}
