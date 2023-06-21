/* eslint-disable */
import { View } from '@tarojs/components'
import { Row, Col } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Row>
        <Col span="8" className="dark">
          span: 8
        </Col>
        <Col span="8" className="light">
          span: 8
        </Col>
        <Col span="8" className="dark">
          span: 8
        </Col>
      </Row>
      <Row>
        <Col span="4" className="dark">
          span: 4
        </Col>
        <Col span="10" className="light" offset="4">
          offset: 4, span: 10
        </Col>
      </Row>
      <Row>
        <Col offset="12" span="12" className="dark">
          offset: 12, span: 12
        </Col>
      </Row>
    </View>
  )
}
