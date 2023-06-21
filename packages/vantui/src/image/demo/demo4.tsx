import { View } from '@tarojs/components'
import { Row, Col, Image, Loading } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Row gutter="20">
      <Col span="8">
        <Image
          width="100%"
          height="27vw"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        ></Image>
        <View className="text">默认提示</View>
      </Col>
      <Col span="8">
        <Image
          src=""
          width="100%"
          height="27vw"
          renderLoading={<Loading type="spinner" size="20" vertical></Loading>}
        ></Image>
        <View className="text">自定义提示</View>
      </Col>
    </Row>
  )
}
