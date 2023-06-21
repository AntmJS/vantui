import { View } from '@tarojs/components'
import { Row, Col, Image } from '@antmjs/vantui'

export default function Demo() {
  return (
    <Row gutter="20">
      <Col span="8">
        <Image
          width="100%"
          height="100px"
          fit="contain"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <View>contain</View>
      </Col>
      <Col span="8">
        <Image
          width="100%"
          height="100px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <View>cover</View>
      </Col>
      <Col span="8">
        <Image
          width="100%"
          height="100px"
          fit="fill"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <View>fill</View>
      </Col>
      <Col span="8">
        <Image
          width="100%"
          height="100px"
          fit="none"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <View>none</View>
      </Col>
      <Col span="8">
        <Image
          width="100%"
          height="100px"
          fit="widthFix"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <View>widthFix</View>
      </Col>
      <Col span="8">
        <Image
          width="100%"
          height="100px"
          fit="heightFix"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <View>heightFix</View>
      </Col>
    </Row>
  )
}
