import { GoodsAction, GoodsActionIcon, GoodsActionButton } from '@antmjs/vantui'

export default function Demo() {
  return (
    <GoodsAction>
      <GoodsActionIcon icon="chat-o" text="客服" />
      <GoodsActionIcon icon="cart-o" text="购物车" info="5" />
      <GoodsActionIcon icon="shop-o" text="店铺" />
      <GoodsActionButton color="#7232dd" text="加入购物" type="warning" />
      <GoodsActionButton plain color="#7232dd" text="立即购买" />
    </GoodsAction>
  )
}
