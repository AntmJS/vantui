/* eslint-disable */
import { View } from '@tarojs/components'
import { Row, Col } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Row gutter="20">
        <Col span="8" className="dark">
          span: 8
        </Col>
        <Col span="8" className="dark">
          span: 8
        </Col>
        <Col span="8" className="dark">
          span: 8
        </Col>
      </Row>
    </View>
  )
}
