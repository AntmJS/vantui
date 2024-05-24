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
      <DemoPage title="space 间距" className="pages-space-index">
        <DemoBlock title="基本用法" padding>
          <Demo1 />
        </DemoBlock>
        <DemoBlock title="垂直方向" padding>
          <Demo2 />
        </DemoBlock>
        <DemoBlock title="自定义间距" padding>
          <Demo3 />
        </DemoBlock>
        <DemoBlock title="主轴对齐方式" padding>
          <Demo4 />
        </DemoBlock>
        <DemoBlock title="交叉轴对齐方式" padding>
          <Demo5 />
        </DemoBlock>
      </DemoPage>
    )
  }
}
