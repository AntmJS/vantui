/* eslint-disable */
import { View } from '@tarojs/components'
import { Card, Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Card
      num="2"
      tag="标签"
      price="10.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
      renderFooter={
        <View>
          <Button size="mini">按钮1</Button>
          <Button size="mini">按钮2</Button>
        </View>
      }
    />
  )
}
