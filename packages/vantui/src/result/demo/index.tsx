/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Result 操作结果" className="pages-result-index">
        <DemoBlock title="成功状态" padding>
          <Demo1 />
        </DemoBlock>
        <DemoBlock title="处理中" padding>
          <Demo2 />
        </DemoBlock>
        <DemoBlock title="提示状态" padding>
          <Demo3 />
        </DemoBlock>
        <DemoBlock title="警告状态" padding>
          <Demo4 />
        </DemoBlock>
        <DemoBlock title="错误状态" padding>
          <Demo5 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
