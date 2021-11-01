import { Component } from 'react'

import { Row, Col } from '@antmjs/vantui'
import DemoPage from '../../components/demo-page/index'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends Component {
  constructor() {
    super()
  }
  state = {}

  render() {
    return (
      <DemoPage title="Layout 布局">
        <>
          <DemoBlock title="基础用法" padding>
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
              <Col span="10" offset="4" className="light">
                offset: 4, span: 10
              </Col>
            </Row>
            <Row>
              <Col offset="12" span="12" className="dark">
                offset: 12, span: 12
              </Col>
            </Row>
          </DemoBlock>
          <DemoBlock title="在列元素之间增加间距" padding>
            <Row gutter="20">
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
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
