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
      <DemoPage title="Divider 分割线" className="pages-divider-index">
        <DemoBlock title="基础用法" padding>
          <Demo1 />
        </DemoBlock>

        <DemoBlock title="使用 hairline" padding>
          <Demo2 />
        </DemoBlock>

        <DemoBlock title="虚线" padding>
          <Demo3 />
        </DemoBlock>

        <DemoBlock title="文本位置" padding>
          <Demo4 />
        </DemoBlock>

        <DemoBlock title="自定义属性" padding>
          <Demo5 />
        </DemoBlock>

        <DemoBlock title="自定义样式" padding>
          <Demo6 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
