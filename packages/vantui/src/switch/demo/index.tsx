/* eslint-disable */

import { Component } from 'react'
import DemoPage from '../../../../vantui-demo/src/components/demo-page/index'
import DemoBlock from '../../../../vantui-demo/src/components/demo-block/index'
import Demo1 from './demo1'
import Demo2 from './demo2'
import Demo3 from './demo3'
import Demo4 from './demo4'
import Demo5 from './demo5'
import Demo6 from './demo6'

export default class Index extends Component {
  constructor(props) {
    super(props)
  }
  state = { active: 0 }
  render() {
    return (
      <DemoPage title="Switch 开关" className="pages-switch-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="禁用状态" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="加载状态" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="自定义大小" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义颜色" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="异步控制" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
