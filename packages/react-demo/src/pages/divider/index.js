import { Component } from 'react'

import { Divider } from '@antmjs/vantui'
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
      <DemoPage title="Divider 分割线">
        <>
          <DemoBlock className="white" title="基础用法" padding>
            <Divider></Divider>
          </DemoBlock>
          <DemoBlock className="white" title="内容位置" padding>
            <Divider contentPosition="center">文本</Divider>
            <Divider contentPosition="left">文本</Divider>
            <Divider contentPosition="right">文本</Divider>
          </DemoBlock>
          <DemoBlock className="white" title="虚线" padding>
            <Divider dashed></Divider>
          </DemoBlock>
          <DemoBlock className="white" title="自定义样式" padding>
            <Divider
              contentPosition="center"
              style="color: #1989fa;border-color: #1989fa;font-size: 18px;"
            >
              文本
            </Divider>
          </DemoBlock>
        </>
      </DemoPage>
    )
  }
}
