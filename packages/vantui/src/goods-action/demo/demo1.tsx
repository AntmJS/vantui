/* eslint-disable */
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
} from '@antmjs/vantui'

export default function Demo() {
  const click = function () {
    Toast.show({
      message: '点击demo1',
    })
  }

  return (
    <GoodsAction safeAreaInsetBottom={false}>
      <GoodsActionIcon icon="chat-o" text="客服" onClick={click} />
      <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
      <GoodsActionButton text="加入购物车" type="warning" onClick={click} />
      <GoodsActionButton text="立即购买" onClick={click} />
      <Toast id="GoodsAction-demo1" />
    </GoodsAction>
  )
}
