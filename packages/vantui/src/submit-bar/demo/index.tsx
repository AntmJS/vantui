/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="SubmitBar 提交订单栏" className="pages-submit-bar-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="禁用状态" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="加载状态" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="高级用法" padding>
          <Demo4 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
