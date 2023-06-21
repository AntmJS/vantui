import { SubmitBar } from '@antmjs/vantui'

export default function Demo() {
  return (
    <SubmitBar
      disabled={true}
      price={3050}
      buttonText="提交订单"
      tip="您的收货地址不支持同城送, 我们已为您推荐快递"
      tipIcon="infoO"
      onSubmit={() => console.info('提交')}
    />
  )
}
