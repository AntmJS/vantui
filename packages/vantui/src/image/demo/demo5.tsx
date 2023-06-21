import { View } from '@tarojs/components'
import { Row, Col, Image, Loading } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Row gutter="20">
      <Col span="8">
        <Image width="100%" height="27vw" src="x"></Image>
        <View className="text">默认提示</View>
      </Col>
      <Col span="8">
        <Image
          src=""
          width="100%"
          height="27vw"
          renderLoading={<Loading />}
        ></Image>
        <View className="text">自定义加载中</View>
      </Col>
    </Row>
  )
}
